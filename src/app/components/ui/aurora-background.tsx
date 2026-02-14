"use client";
import React, { useEffect, useMemo, useRef } from 'react';
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { cn } from './utils';
import { usePerformance } from '../../contexts';

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform float uBaseColor;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = mix(vec3(uBaseColor), rampColor, intensity);
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  speed?: number;
  time?: number; // Added to match Aurora.jsx props
  baseColor?: number;
  disableAdaptiveQuality?: boolean;
}

function toColorStopsArray(stops: string[]): [number, number, number][] {
  const fallback = ['#7DFF68', '#51FFB2', '#FFFFFF'];
  const normalized = [
    stops[0] || fallback[0],
    stops[1] || stops[0] || fallback[1],
    stops[2] || stops[1] || stops[0] || fallback[2],
  ];
  return normalized.map((hex) => {
    const color = new Color(hex);
    return [color.r, color.g, color.b];
  }) as [number, number, number][];
}

export const AuroraBackground = ({
  children,
  className,
  colorStops = ['#7DFF68', '#51FFB2', '#FFFFFF'],
  amplitude = 1.0,
  blend = 0.8,
  speed = 0.5,
  time,
  baseColor = 0.0,
  disableAdaptiveQuality = false,
  ...props
}: AuroraBackgroundProps) => {
  const { isWindows, isLowEndDevice, reduceMotion } = usePerformance();

  const qualityProfile = useMemo(() => {
    if (disableAdaptiveQuality) {
      return {
        constrained: false,
        maxFPS: 60,
        maxDpr: 2,
        renderScale: 1,
        amplitudeScale: 1,
        blendScale: 1,
        antialias: true,
      };
    }

    const constrained = isWindows || isLowEndDevice;
    return {
      constrained,
      // Keep dynamic effect while reducing GPU cost on Windows/low-end devices.
      maxFPS: reduceMotion ? 24 : constrained ? 30 : 60,
      maxDpr: constrained ? 1.25 : 2,
      renderScale: constrained ? 0.82 : 1,
      amplitudeScale: constrained ? 0.9 : 1,
      blendScale: constrained ? 0.92 : 1,
      antialias: !constrained,
    };
  }, [disableAdaptiveQuality, isLowEndDevice, isWindows, reduceMotion]);

  const propsRef = useRef({ colorStops, amplitude, blend, speed, time, baseColor });
  propsRef.current = { colorStops, amplitude, blend, speed, time, baseColor };
  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    let isInViewport = true;
    let isPageVisible = typeof document === 'undefined' ? true : document.visibilityState === 'visible';
    let observer: IntersectionObserver | null = null;
    let frameHandle = 0;
    let lastRenderedAt = 0;
    let currentDpr = Math.max(0.5, Math.min((window.devicePixelRatio || 1) * qualityProfile.renderScale, qualityProfile.maxDpr));
    const frameIntervalMs = 1000 / qualityProfile.maxFPS;

    const colorCache = {
      key: colorStops.join('|'),
      value: toColorStopsArray(colorStops),
    };

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: qualityProfile.antialias,
      dpr: currentDpr
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = 'transparent';

    let program: Program;

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      const nextDpr = Math.max(0.5, Math.min((window.devicePixelRatio || 1) * qualityProfile.renderScale, qualityProfile.maxDpr));
      if (nextDpr !== currentDpr) {
        currentDpr = nextDpr;
        renderer.dpr = currentDpr;
      }
      renderer.setSize(width, height);
      if (program) {
        program.uniforms.uResolution.value = [width, height];
      }
    }
    window.addEventListener('resize', resize);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorCache.value },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uBlend: { value: blend },
        uBaseColor: { value: baseColor }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let update: (t: number) => void = () => {};
    const canRender = () => isInViewport && isPageVisible;

    const syncRenderLoop = () => {
      if (canRender()) {
        if (!frameHandle) {
          frameHandle = requestAnimationFrame(update);
        }
      } else if (frameHandle) {
        cancelAnimationFrame(frameHandle);
        frameHandle = 0;
      }
    };

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === 'visible';
      syncRenderLoop();
    };

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isInViewport = entry.isIntersecting;
          syncRenderLoop();
        },
        { threshold: 0.01 }
      );
      observer.observe(ctn);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    update = (t: number) => {
      frameHandle = requestAnimationFrame(update);
      if (!canRender()) return;
      if (t - lastRenderedAt < frameIntervalMs) return;
      lastRenderedAt = t;

      const { time = t * 0.01, speed = 1.0 } = propsRef.current;
      const nextColorKey = propsRef.current.colorStops.join('|');
      if (nextColorKey !== colorCache.key) {
        colorCache.key = nextColorKey;
        colorCache.value = toColorStopsArray(propsRef.current.colorStops);
        program.uniforms.uColorStops.value = colorCache.value;
      }

      program.uniforms.uTime.value = time * speed * 0.1;
      program.uniforms.uAmplitude.value = (propsRef.current.amplitude ?? 1.0) * qualityProfile.amplitudeScale;
      program.uniforms.uBlend.value = Math.min(1, (propsRef.current.blend ?? blend) * qualityProfile.blendScale);
      program.uniforms.uBaseColor.value = propsRef.current.baseColor ?? 0.0;
      renderer.render({ scene: mesh });
    };
    syncRenderLoop();

    resize();

    return () => {
      if (frameHandle) {
        cancelAnimationFrame(frameHandle);
      }
      if (observer) {
        observer.disconnect();
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', resize);
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      const extension = gl.getExtension('WEBGL_lose_context');
      if (extension) extension.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qualityProfile]);

  return (
    <div
      className={cn(
        "relative flex flex-col w-full h-full",
        className
      )}
      {...props}
    >
      <div 
        ref={ctnDom} 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 w-full h-full">
          {children}
      </div>
    </div>
  );
};

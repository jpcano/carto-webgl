// 1. Vertical stripes

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    float saw = mod(gl_FragCoord.x, 40.0);
  	float luma = step(saw, 20.0);
    gl_FragColor = vec4(luma, luma, luma, 1.0);    
}
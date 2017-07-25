// 2. Square soup

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 saw = mod(gl_FragCoord.xy, 40.0);
	float luma;
    
    if (saw.x < 20.0 ^^ saw.y < 20.0) {
        luma = 0.0;
    } else {
        luma = 1.0;
    }
    gl_FragColor = vec4(luma, luma, luma, 1.0);
}
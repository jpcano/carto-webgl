// 4. White circle

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
    vec2 center = u_resolution / 2.0;

    float dist = distance(gl_FragCoord.xy, center);
    float luma = step(dist, 200.00);
    gl_FragColor = vec4(luma, luma, luma, 1.0);
}
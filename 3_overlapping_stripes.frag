// 3. Overlapping stripes
//
// Essentially this works by overlapping red, green and blue
// stripes. Remember that black is the absence of rgb and
// white is the overlapping of rgb.

#ifdef GL_ES
precision mediump float;
#endif

void main() {
	float r = step(mod(gl_FragCoord.x, 160.0), 80.0);
    float g = step(mod(gl_FragCoord.x, 80.0), 40.0);
    float b = step(mod(gl_FragCoord.x, 40.0), 20.0);
 
    gl_FragColor = vec4(r, g, b, 1.0);
}
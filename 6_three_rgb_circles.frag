// 6. Three RGB circles

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float distSquared(vec2 a, vec2 b) {
    return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
}

void main() {
    float radius = 100.;
    vec2 center = u_resolution / 2.0;
    float radiusSq = radius * radius;
    
    float r = step(distSquared(gl_FragCoord.xy, center + vec2(-69., -69.)), radiusSq);
    float g = step(distSquared(gl_FragCoord.xy, center + vec2(69., -69.)), radiusSq);
    float b = step(distSquared(gl_FragCoord.xy, center + vec2(0., 69.)), radiusSq);
    
    gl_FragColor = vec4(r, g, b, 1.0);
}
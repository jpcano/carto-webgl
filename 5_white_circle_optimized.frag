// 5. White circle optimized
//
// Calculating the distance between a point and the center using 
// the distance() function is computationally expensive. distance() uses
// the square root function which is an iterative algorithm and therefore slow.
// Here we will avoid the square root function by using  the squared distances
// and the squared radius.

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float distSquared(vec2 a, vec2 b) {
    return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
}

void main() {
    float radius = 200.;
    vec2 center = u_resolution / 2.0;
    float radiusSq = radius * radius;
    
    float luma = step(distSquared(gl_FragCoord.xy, center), radiusSq);
    
    gl_FragColor = vec4(luma, luma, luma, 1.0);
}
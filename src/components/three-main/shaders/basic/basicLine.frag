precision mediump float;
#define PI 3.14159265359

varying vec2 vUvs;

uniform sampler2D texture;
uniform float time;

float rand(float t)
{
    return fract(sin(dot(vec2(t,t) ,vec2(12.9898,78.233))) * 43758.5453);
}



void main()
{
    
    float t = time;

    //vec3 color = vec3( 0.0 );
    vec3 color = texture2D( texture, vUvs ).rgb;

    gl_FragColor = vec4(color, 1.0);


}
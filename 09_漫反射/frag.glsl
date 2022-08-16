precision mediump float;
varying vec4 vColor;

uniform vec3 uAmbientColor;
uniform float uAmbientIntensity;


void main(){
  vec3 ambient = uAmbientColor * uAmbientIntensity;


  gl_FragColor = vColor * vec4(ambient, 1.0);
}
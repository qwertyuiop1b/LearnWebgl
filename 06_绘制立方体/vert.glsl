attribute vec3 aPosition;
attribute vec4 aColor;
varying vec4 vColor;
uniform mat4 uMatrix;

void main(){
  vColor = aColor;
  gl_Position = uMatrix * vec4(aPosition, 1.0);
}
/**
 * 
 * @param {String} url 
 * @returns {Promise}
 */
const loadGLSL = (url) => {
  return fetch(url).then(response => {
    return response.text()
  })
}

/**
 * 
 * @param {WebGL2RenderingContext} gl 
 * @param {Number} type 
 * @param {String} src 
 */
const createShader = (gl, type, src) => {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, src)
  gl.compileShader(shader)
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    return shader
  }
  gl.deleteShader(shader)
  throw new Error("compile shader error", gl.getShaderInfoLog(shader))
}

/**
 * 
 * @param {WebGL2RenderingContext} gl 
 * @param {WebGLShader} vertShader 
 * @param {WebGLShader} fragShader 
 */
const createProgram = (gl, vertShader, fragShader) => {
  const program = gl.createProgram()
  gl.attachShader(program,vertShader)
  gl.attachShader(program, fragShader)
  gl.linkProgram(program)

  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return program
  }
  gl.deleteProgram(program)
  throw new Error("program link error", gl.getProgramInfoLog(program))
}

export default {
  loadGLSL,
  createShader,
  createProgram
}


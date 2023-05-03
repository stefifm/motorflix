import axios from 'axios'

const dataDB = axios.create({
  baseURL: 'https://motorflix-api.onrender.com/'
})

export const getVideos = () => dataDB.get('/videos')
export const getCategorias = () => dataDB.get('/categorias')
export const createVideo = (video) => dataDB.post('/videos', video)
export const createCategoria = (categoria) => dataDB.post('/categorias', categoria)
export const updateCategoria = (id, categoria) => dataDB.put(`/categorias/${id}`, categoria)
export const deleteCategoria = (id) => dataDB.delete(`/categorias/${id}`)
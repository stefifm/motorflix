import axios from 'axios'

const dataDB = axios.create({
  baseURL: 'https://motorflix-api.azurewebsites.net/'
})

export const getVideos = () => dataDB.get('/videos')
export const createVideo = (video) => dataDB.post('/videos', video)
export const updateVideo = (id, video) => dataDB.put(`/videos/${id}/`, video)
export const deleteVideo = (id) => dataDB.delete(`/videos/${id}`)
export const getVideo = (id) => dataDB.get(`/videos/${id}`)
export const filterVideos = (search) => dataDB.get(`/videos?q=${search}`)

export const getCategorias = () => dataDB.get('/categorias')
export const getCategoria = (id) => dataDB.get(`/categorias/${id}`)
export const createCategoria = (categoria) => dataDB.post('/categorias', categoria)
export const updateCategoria = (id, categoria) => dataDB.put(`/categorias/${id}`, categoria)
export const deleteCategoria = (id) => dataDB.delete(`/categorias/${id}`)

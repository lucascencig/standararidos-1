import axios from 'axios';
export function postProducto(payload) {
  return async function () {
    try {
      const response = await axios.post('/post', payload);
      return response;
    } catch (e) {
      console.log(e);
    }
  };
}

export function getProducto() {
  return function (dispatch) {
    axios.get('/get').then(res => {
      return dispatch({ type: 'GET_PRODUCTOS_ALL', payload: res.data });
    });
  };
}

export function detalleProducto(id) {
  return function (dispatch) {
    axios.get(`/producto/${id}`).then(res => {
      return dispatch({ type: 'DETALLE_PRODUCTO', payload: res.data });
    });
  };
}

export function getUrl(url) {
  return { type: 'POST_URL', payload: url };
}

// UPDATE

// buscador

export function filterProductoPorNombre(nombre) {
  return async dispatch => {
    let { data } = await axios.get(`/get/search/${nombre}`);
    return dispatch({ type: 'SEARCH_SEARCH', payload: data });
  };
}

//modificar

export function modificarProducto(id, input) {
  return async dispatch => {
    try {
      let { data } = await axios.put(`/${id}`, input)
      return dispatch({ type: 'UPDATE_PRODUCTO', payload: data })
    }
    catch (err) {
      alert(err.response.data)
    }
  }
}




//DELETE

export function deleteProducto(id) {
  return async dispatch => {
    await axios.delete(`/del/${id}`)
    return dispatch({ type: 'DELETE_PRODUCTO' })
  }



}
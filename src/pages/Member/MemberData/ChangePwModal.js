import axios from 'axios'
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { API_URL } from '../../../utils/config'

function ChangePwModal(props) {
  const [changePw, setChangePw] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  const [editErr, setEditErr] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })
  // input onChange
  const handleChange = (e) => {
    setChangePw({ ...changePw, [e.target.name]: e.target.value })
    setEditErr({ ...editErr, [e.target.name]: '' })
  }
  // form submit
  async function handleChangePwSubmit(e) {
    e.preventDefault()
    try {
      let result = await axios.post(`${API_URL}/member/changePw`, changePw, {
        withCredentials: true,
      })
      console.log(result.data.data)
    } catch (e) {
      console.error('error', e.response.data)
    }
  }
  return (
    <>
      <Modal
        show={props.showModal}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        animation={false}
        className="changePw-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>修改密碼</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="container px-5">
            <div className="form-group row">
              <label
                htmlFor="oldPassword"
                className="col-4 col-form-label text-center"
              >
                原密碼
              </label>
              <input
                type="password"
                className="form-control col-6"
                id="oldPassword"
                name="oldPassword"
                value={changePw.oldPassword}
                onChange={handleChange}
              />
            </div>
            <div className="form-group row">
              <label
                htmlFor="newPassword"
                className="col-4 col-form-label text-center"
              >
                新密碼
              </label>
              <input
                type="password"
                className="form-control col-6"
                id="newPassword"
                name="newPassword"
                value={changePw.newPassword}
                onChange={handleChange}
              />
            </div>
            <div className="form-group row">
              <label
                htmlFor="confirmNewPassword"
                className="col-4 col-form-label text-center"
              >
                確認新密碼
              </label>
              <input
                type="password"
                className="form-control col-6"
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={changePw.confirmNewPassword}
                onChange={handleChange}
              />
            </div>
            <div className="text-center my-3">
              <button
                type="button"
                className="btn btn-secondary mx-1"
                onClick={props.handleClose}
              >
                取消
              </button>
              <button
                type="button"
                className="btn btn-primary mx-1"
                onClick={handleChangePwSubmit}
              >
                確認
              </button>
            </div>
          </form>
        </Modal.Body>
        {/* <Modal.Footer className={props.showFooter}>
          <Button variant="secondary" onClick={props.handleClose}>
            取消
          </Button>
          <Button variant="primary" onClick={props.handleConfirm}>
            確認
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default ChangePwModal

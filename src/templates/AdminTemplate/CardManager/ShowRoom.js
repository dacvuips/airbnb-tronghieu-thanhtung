import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardIdDeleteAction, getCardIdAction } from "redux/actions/CardAction";
import { Form, Input, Switch, DatePicker } from "antd";
import moment from "moment";
export default function ShowRoom(props) {
  const { cardRoom } = useSelector((state) => state.CardReducer);

  const dispatch = useDispatch();
  const id = props.id;

  useEffect(() => {
    dispatch(getCardIdAction(id));
  }, []);

  const room = cardRoom.roomId;
  const user = cardRoom.userId;

  return (
    <>
      <div className="col">
        <div
          className="btn btn-danger"
          onClick={() => {
            dispatch(cardIdDeleteAction(id));
          }}
        >
          Xóa
        </div>
        <form>
          <div className="form-group mt-3">
            <img
              className=" mb-3"
              src={
                room?.image
                  ? room.image
                  : "https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg"
              }
              style={{ width: "100%", height: "70%" }}
              alt="Ảnh"
            />
          </div>
          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Tên phòng">
              <Input
                className="form-control"
                type="text"
                name="name"
                value={room?.name}
              />
            </Form.Item>
          </div>
          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Mô tả">
              <Input
                className="form-control"
                type="text"
                name="description"
                value={room?.description}
              />
            </Form.Item>
          </div>
          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Số khách">
              <Input
                className="form-control"
                type="number"
                name="guests"
                value={room?.guests}
              />
            </Form.Item>
          </div>
          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Số giường">
              <Input
                className="form-control"
                type="text"
                name="bedRoom"
                value={room?.bedRoom}
              />
            </Form.Item>
          </div>
          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Số phòng tắm">
              <Input
                className="form-control"
                type="number"
                name="bath"
                value={room?.bath}
              />
            </Form.Item>
          </div>
          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Giá phòng">
              <Input
                className="form-control"
                type="number"
                name="price"
                value={room?.price}
              />
            </Form.Item>
          </div>
          <div className="row">
            <div className="col">
              <Form.Item label="Thang máy" valuePropName="checked">
                <Switch name="elevator" checked={room?.elevator} />
              </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Bồn nước nóng" valuePropName="checked">
                <Switch name="hotTub" checked={room?.hotTub} />
              </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Hồ bơi" valuePropName="checked">
                <Switch name="pool" checked={room?.pool} />
              </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Lò sưởi" valuePropName="checked">
                <Switch
                  name="indoorFireplace"
                  checked={room?.indoorFireplace}
                />
              </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Máy sáy" valuePropName="checked">
                <Switch name="dryer" checked={room?.dryer} />
              </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Phòng Gym" valuePropName="checked">
                <Switch name="gym" checked={room?.gym} />
              </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Phòng ăn" valuePropName="checked">
                <Switch name="kitchen" checked={room?.kitchen} />
              </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Wifi" valuePropName="checked">
                <Switch name="wifi" checked={room?.wifi} />
              </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Sưởi" valuePropName="checked">
                <Switch name="heating" checked={room?.heating} />
              </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Truyền hình cáp" valuePropName="checked">
                <Switch name="cableTV" checked={room?.cableTV} />
              </Form.Item>
            </div>
          </div>
        </form>
      </div>

      <div className="col">
        <form>
          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Tài khoản">
              <Input
                className="form-control"
                placeholder="Vui lòng nhập tài khoản"
                type="text"
                name="name"
                value={user?.name}
              />
            </Form.Item>
          </div>

          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Email">
              <Input
                className="form-control"
                placeholder="Vui lòng nhập Email"
                type="text"
                name="email"
                value={user?.email}
              />
            </Form.Item>
          </div>
          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Số điện thoại">
              <Input
                className="form-control"
                placeholder="Vui lòng nhập số điện thoại"
                type="number"
                name="phone"
                value={user?.phone}
              />
            </Form.Item>

            <Form.Item className="mb-1" label="Ngày sinh">
              <DatePicker
                format="YYYY/MM/DD"
                name="birthday"
                value={moment(user?.birthday, "YYYY/MM/DD")}
              />
            </Form.Item>
          </div>
          <div className="form-group mt-3">
            <Form.Item className="mb-1" label="Địa chỉ">
              <Input
                className="form-control"
                placeholder="Vui lòng nhập địa chỉ"
                type="text"
                name="address"
                value={user?.address}
              />
            </Form.Item>
          </div>
        </form>
      </div>
    </>
  );
}


import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import axios from 'axios';

function ProductDetailPopup({ open, onClose, onSave }) {
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [selectedColorId, setSelectedColorId] = useState('');
    const [selectedSizeId, setSelectedSizeId] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sizeQuantityList, setSizeQuantityList] = useState([]);
    const [image, setImage] = useState(null); // File ảnh lưu trữ tạm thời

    useEffect(() => {
        const fetchColors = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const config = { headers: { Authorization: `Bearer ${accessToken}` } };
                const response = await axios.get('http://localhost:8080/api/colors', config);
                setColors(response.data);
            } catch (error) {
                console.error('Lỗi khi gọi API colors:', error);
            }
        };

        const fetchSizes = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                const config = { headers: { Authorization: `Bearer ${accessToken}` } };
                const response = await axios.get('http://localhost:8080/api/sizes', config);
                setSizes(response.data);
            } catch (error) {
                console.error('Lỗi khi gọi API sizes:', error);
            }
        };

        fetchColors();
        fetchSizes();
    }, []);

    const handleColorSelectChange = (e) => {
        setSelectedColorId(e.target.value);
    };

    const handleSizeSelectChange = (e) => {
        setSelectedSizeId(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddSizeQuantity = () => {
        if (selectedSizeId && quantity) {
            const sizeIdNumber = Number(selectedSizeId);
            const quantityNumber = Number(quantity);

            setSizeQuantityList((prevList) => {
                const existingSize = prevList.find((item) => item.sizeId === sizeIdNumber);

                if (existingSize) {
                    return prevList.map((item) =>
                        item.sizeId === sizeIdNumber
                            ? { ...item, quantity: item.quantity + quantityNumber }
                            : item
                    );
                } else {
                    return [...prevList, { sizeId: sizeIdNumber, quantity: quantityNumber }];
                }
            });

            // Reset the selected size and quantity
            setSelectedSizeId('');
            setQuantity('');
        } else {
            alert('Vui lòng chọn kích thước và nhập số lượng!');
        }
    };

    const handleDeleteSizeQuantity = (indexToDelete) => {
        setSizeQuantityList((prevList) => prevList.filter((_, index) => index !== indexToDelete));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleSave = () => {

        const color = colors.find((c) => c.id === Number(selectedColorId));
        const colorName = color ? color.colorName : '';

        // Lấy danh sách sizeName từ sizeQuantityList
        const sizeQuantityWithNames = sizeQuantityList.map((item) => {
            const size = sizes.find((s) => s.id === item.sizeId);
            return {
                ...item,
                sizeName: size ? size.sizeName : '',
            };
        });
        if (selectedColorId && image && sizeQuantityList.length > 0) {
            const data = {
                colorId: Number(selectedColorId),
                image: image, // Truyền file ảnh lên component cha
                colorName: colorName,
                sizeQuantityList: sizeQuantityList,
                sizeColorName: sizeQuantityWithNames,
            };

            console.log("data",data);

            onSave(data);
            onClose();
        } else {
            alert('Vui lòng chọn màu, tải lên hình ảnh và thêm kích thước cũng như số lượng!');
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{"Thông báo"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Tên Màu:</span>
                        <select className="form-select" onChange={handleColorSelectChange} value={selectedColorId}>
                            <option value="">Chọn tên màu</option>
                            {colors.map((color) => (
                                <option key={color.id} value={color.id}>
                                    {color.colorName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="me-2">
                            <span className="input-group-text">Kích Thước:</span>
                            <select className="form-select" onChange={handleSizeSelectChange} value={selectedSizeId}>
                                <option value="">Chọn kích thước</option>
                                {sizes.map((size) => (
                                    <option key={size.id} value={size.id}>
                                        {size.sizeName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="ms-2">
                            <span className="input-group-text">Số Lượng:</span>
                            <input
                                type="number"
                                className="form-control"
                                value={quantity}
                                onChange={handleQuantityChange}
                                placeholder="Số lượng"
                            />
                        </div>
                        <Button variant="contained" color="primary" onClick={handleAddSizeQuantity} className="ms-2">
                            Thêm
                        </Button>
                    </div>
                    <div>
                        <h5>Danh sách Kích Thước & Số Lượng:</h5>
                        <ul>
                            {sizeQuantityList.map((item, index) => (
                                <li key={index}>
                                    Kích Thước ID: {item.sizeId}, Số Lượng: {item.quantity}
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDeleteSizeQuantity(index)}
                                        className="ms-2"
                                        size="small"
                                    >
                                        Xóa
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="container mt-4">
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Chọn Ảnh
                            </label>
                            <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleImageChange}
                                accept="image/*"
                            />
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Đóng
                </Button>
                <Button onClick={handleSave} color="primary" autoFocus>
                    Đồng ý
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ProductDetailPopup;

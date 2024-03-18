function handleSortChange() {
    var selectedValue = document.getElementById("sapXep").value; // Lấy giá trị đã chọn từ dropdown

    const promise = api.fecthData(); // Lấy dữ liệu sản phẩm từ API
    // Hiển thị loader
    document.getElementById("loader").style.display = "block";
    promise
        .then(function (result) {
            // Ẩn loader
            document.getElementById("loader").style.display = "none";
            const data = result.data; // Dữ liệu sản phẩm

            if (selectedValue === "giaTangDan") {
                // Sắp xếp sản phẩm theo giá tăng dần
                data.sort((a, b) => a.price - b.price);
            } else if (selectedValue === "giaGiamDan") {
                // Sắp xếp sản phẩm theo giá giảm dần
                data.sort((a, b) => b.price - a.price);
            }

            // Render UI với dữ liệu đã được sắp xếp
            renderUI(data);
        })
        .catch(function (error) {
            // Xử lý lỗi nếu có
            console.log(error);
            // Ẩn loader
            document.getElementById("loader").style.display = "none";
        });
}

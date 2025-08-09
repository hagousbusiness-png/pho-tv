// Dữ liệu mẫu idol. Bạn có thể thay đổi, thêm mới, hoặc fetch từ API backend nếu mở rộng.
const idols = [
  {
    name: "Ngọc Anh",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    height: "165cm",
    weight: "48kg",
    measurements: "85-56-88",
    price: "100.000đ/30 phút",
    video: "https://www.youtube.com/embed/ScMzIvxBSi4", // demo
  },
  {
    name: "Minh Tuấn",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    height: "178cm",
    weight: "70kg",
    measurements: "Không công khai",
    price: "150.000đ/30 phút",
    video: "",
  },
  {
    name: "Hà Linh",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
    height: "160cm",
    weight: "46kg",
    measurements: "80-55-85",
    price: "120.000đ/30 phút",
    video: "",
  }
];

function renderIdolCard(idol, index) {
  return `
    <div class="idol-card">
      <img class="idol-avatar" src="${idol.avatar}" alt="Avatar ${idol.name}">
      <div class="idol-name">${idol.name}</div>
      <div class="idol-info">
        <div>Chiều cao: ${idol.height}</div>
        <div>Cân nặng: ${idol.weight}</div>
        <div>Số đo 3 vòng: ${idol.measurements}</div>
      </div>
      <div class="idol-actions">
        <a href="#" class="button secondary" title="Xem chi tiết">Xem chi tiết</a>
        <a href="#" class="button" title="Book call">Book call (${idol.price})</a>
      </div>
    </div>
  `;
}

document.getElementById('idol-list').innerHTML = idols.map(renderIdolCard).join('');
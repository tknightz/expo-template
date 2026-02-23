const vi = {
  tabs: {
    home: 'Trang chủ',
    explore: 'Khám phá',
  },
  language: {
    label: 'Ngôn ngữ',
    english: 'Tiếng Anh',
    vietnamese: 'Tiếng Việt',
  },
  modal: {
    title: 'Modal',
    body: 'Đây là một modal',
    goHome: 'Về màn hình trang chủ',
  },
  home: {
    welcome: 'Chào mừng!',
    step1: {
      title: 'Bước 1: Thử ngay',
      body: 'Sửa <file>{{file}}</file> để xem thay đổi. Nhấn <shortcut>{{shortcut}}</shortcut> để mở công cụ phát triển.',
    },
    step2: {
      title: 'Bước 2: Khám phá',
      body: 'Chạm tab Khám phá để tìm hiểu thêm về những gì có trong ứng dụng mẫu này.',
      menu: {
        action: 'Hành động',
        share: 'Chia sẻ',
        more: 'Thêm',
        delete: 'Xóa',
      },
    },
    step3: {
      title: 'Bước 3: Bắt đầu mới',
      body: 'Khi sẵn sàng, hãy chạy <command>{{command}}</command> để tạo một thư mục <app>{{app}}</app> mới. Lệnh này sẽ chuyển thư mục <app>{{app}}</app> hiện tại sang <appExample>{{appExample}}</appExample>.',
    },
  },
  explore: {
    title: 'Khám phá',
    intro: 'Ứng dụng này có mã mẫu giúp bạn bắt đầu nhanh hơn.',
    sections: {
      routing: {
        title: 'Điều hướng theo tệp',
        body1:
          'Ứng dụng này có hai màn hình: <file>{{homeFile}}</file> và <file>{{exploreFile}}</file>.',
        body2:
          'Tệp layout trong <file>{{layoutFile}}</file> thiết lập tab navigator.',
        link: 'Tìm hiểu thêm',
      },
      platforms: {
        title: 'Hỗ trợ Android, iOS và web',
        body: 'Bạn có thể mở dự án này trên Android, iOS và web. Để mở phiên bản web, nhấn <key>{{key}}</key> trong terminal đang chạy dự án.',
      },
      images: {
        title: 'Hình ảnh',
        body: 'Với hình ảnh tĩnh, bạn có thể dùng các hậu tố <suffix>{{suffix2x}}</suffix> và <suffix>{{suffix3x}}</suffix> để cung cấp tệp cho các mật độ màn hình khác nhau',
        link: 'Tìm hiểu thêm',
      },
      themes: {
        title: 'Thành phần cho chế độ sáng và tối',
        body: 'Mẫu này có hỗ trợ chế độ sáng và tối. Hook <hook>{{hook}}</hook> cho phép bạn xem chế độ màu hiện tại của người dùng để điều chỉnh giao diện tương ứng.',
        link: 'Tìm hiểu thêm',
      },
      animations: {
        title: 'Hiệu ứng chuyển động',
        body: 'Mẫu này có ví dụ về một thành phần có hiệu ứng. Thành phần <component>{{component}}</component> sử dụng thư viện <library>{{library}}</library> để tạo hiệu ứng tay vẫy.',
        iosBody:
          'Thành phần <component>{{component}}</component> tạo hiệu ứng parallax cho hình ảnh tiêu đề.',
      },
    },
  },
};

export default vi;

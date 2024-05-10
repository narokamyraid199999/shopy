import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { productDescription } from '../interfaces/product-details';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  localProducts: productDescription[] = [
    {
      id: 1,
      img: [
        'https://i.ibb.co/WVdTgR8/headphone-1.png',
        'https://i.ibb.co/zh9x3Q0/headphone-2.png',
        'https://i.ibb.co/JBZk7sS/headphone-3.png',
        'https://i.ibb.co/SrPq3r0/headphone-4.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",
      quantity: 10,
      category: 'headphones',
      title: 'Headphones Wireless.',
      reviews: 7,
      price: 103.2,
      discount: 120,
    },
    {
      id: 2,
      img: [
        'https://i.ibb.co/n1YRvWJ/headphone-5.png',
        'https://i.ibb.co/WpkH1vq/headphone-6.png',
        'https://i.ibb.co/yRYbDCc/headphone-7.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",
      quantity: 5,
      category: 'headphones',
      title: 'Headphones Wireless.',
      reviews: 7,
      price: 103.2,
      discount: 120,
    },
    {
      id: 3,
      img: [
        'https://i.ibb.co/5FPhGtq/headphone-8.png',
        'https://i.ibb.co/vHP1TQf/headphone-9.png',
        'https://i.ibb.co/3mdtrcm/headphone-10.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",
      quantity: 3,
      category: 'headphones',
      title: 'Headphone with Mic',
      reviews: 7,
      price: 103.2,
      discount: 120,
    },
    {
      id: 4,
      img: [
        'https://i.ibb.co/jvGv6qf/mobile-1.png',
        'https://i.ibb.co/F3VPLLh/mobile-2.png',
        'https://i.ibb.co/rtmKcPg/mobile-3.png',
        'https://i.ibb.co/NpWtdts/mobile-4.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",
      quantity: 5,
      category: 'Mobile Tablets',
      title: 'Galaxy Android Tablet',
      reviews: 5,
      price: 288.0,
      discount: 120,
    },
    {
      id: 5,
      img: [
        'https://i.ibb.co/3WMPkkf/mobile-5.png',
        'https://i.ibb.co/MfdxWfv/mobile-6.png',
        'https://i.ibb.co/vV22rXc/mobile-7.png',
        'https://i.ibb.co/Kby3sY7/mobile-8.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",

      quantity: 5,
      category: 'Mobile Tablets',
      title: 'iPhone 14 Pro',
      reviews: 5,
      price: 288.0,
      discount: 120,
    },
    {
      id: 6,
      img: [
        'https://i.ibb.co/kxGMcrw/ipad-1.png',
        'https://i.ibb.co/NpWzRPL/ipad-2.png',
        'https://i.ibb.co/bzgBZ4Y/ipad-3.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",

      quantity: 2,
      category: 'Mobile Tablets',
      title: 'Apple iPad Air',
      reviews: 4,
      price: 949.05,
      discount: 120,
    },
    {
      id: 7,
      img: [
        'https://i.ibb.co/wYZr4k6/cpu-1.png',
        'https://i.ibb.co/xsKNnzM/cpu-2.png',
        'https://i.ibb.co/Yf8YRGy/cpu-3.png',
        'https://i.ibb.co/23XyrR3/cpu-4.png',
      ],
      description:
        'DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler is AMD AM4 Ready. (NOTE: Refer to FM2+/ FM2/ FM1/ AM3+/ AM3/ AM2+/ AM2 for the manuals). It is equipped with multiple clips to support Intel LGA1155/ 1156/ 775 and AMD AM4/ AM3/ AM2+/ AM2/ K8. It has 2 sintered metal powder heatpipes directly contacting the CPU surface for removing heat and eliminating chances of overheating. It features specialized aluminum heatsink construction for efficient heat dissipation. TPE fan housing designed to absorb operating vibration and reduce fan noise. it has a 1-year warranty',
      quantity: 7,
      category: 'CPU Heat Pipes',
      title: 'DeepCool Air Cooler',
      reviews: 2,
      price: 100.05,
      discount: 120,
    },
    {
      id: 8,
      img: [
        'https://i.ibb.co/tpypd3B/cpu-5.png',
        'https://i.ibb.co/wwNDDSG/cpu-6.png',
        'https://i.ibb.co/sHRhjSC/cpu-7.png',
        'https://i.ibb.co/vDrwNFX/cpu-8.png',
      ],
      description:
        'Antec ICE EDGE MINI FS V2.0 CPU Air Cooler DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler is AMD AM4 Ready. (NOTE: Refer to FM2+/ FM2/ FM1/ AM3+/ AM3/ AM2+/ AM2 for the manuals). It is equipped with multiple clips to support Intel LGA1155/ 1156/ 775 and AMD AM4/ AM3/ AM2+/ AM2/ K8. It has 2 sintered metal powder heatpipes directly contacting the CPU surface for removing heat and eliminating chances of overheating. It features specialized aluminum heatsink construction for efficient heat dissipation. TPE fan housing designed to absorb operating vibration and reduce fan noise. it has a 1-year warranty',

      quantity: 3,
      category: 'CPU Heat Pipes',
      title: 'Antec Air Cooler',
      reviews: 6,
      price: 150.05,
      discount: 120,
    },
    {
      id: 9,
      img: [
        'https://i.ibb.co/yRRLCc5/watch-1.png',
        'https://i.ibb.co/WK6bhWf/watch-2.png',
        'https://i.ibb.co/f2DJvh9/watch-3.png',
        'https://i.ibb.co/8rfG5wZ/watch-4.png',
      ],
      description:
        'Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles',

      quantity: 7,
      category: 'Smart Watch',
      title: 'Apple Watch Sport Band',
      reviews: 2,
      price: 426.55,
      discount: 21,
    },
    {
      id: 10,
      img: [
        'https://i.ibb.co/j4sDV3Q/watch-5.png',
        'https://i.ibb.co/hDwW5Td/watch-6.png',
        'https://i.ibb.co/6HFLgPB/watch-7.png',
        'https://i.ibb.co/JxJ0XS4/watch-8.png',
      ],
      description:
        'Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles',
      quantity: 2,
      category: 'Smart Watch',
      title: 'Sony Smart Watch',
      reviews: 4,
      price: 190.0,
      discount: 171,
    },
    {
      id: 11,
      img: [
        'https://i.ibb.co/j4sDV3Q/watch-5.png',
        'https://i.ibb.co/hDwW5Td/watch-6.png',
        'https://i.ibb.co/6HFLgPB/watch-7.png',
        'https://i.ibb.co/JxJ0XS4/watch-8.png',
      ],
      description:
        'Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles',
      quantity: 2,
      category: 'Smart Watch',
      title: 'Sony Smart Watch',
      reviews: 4,
      price: 190.0,
      discount: 171,
    },
    {
      id: 12,
      img: [
        'https://i.ibb.co/RYST3Ym/blutooth-4.png',
        'https://i.ibb.co/SXSdbjM/blutooth-5.png',
        'https://i.ibb.co/L12vDxf/blutooth-6.png',
      ],
      description:
        'Starlight Aluminum Case with Braided Solo Loop The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. The Braided Solo Loop is made from recycled yarn and silicone threads for an ultracomfortable, stretchable design with no clasps or buckles',
      quantity: 13,
      category: 'Bluetooth',
      title: 'Lenovo Wireless Bluetooth',
      reviews: 3,
      price: 66.5,
      discount: 18,
    },
    {
      id: 13,
      img: [
        'https://i.ibb.co/WVdTgR8/headphone-1.png',
        'https://i.ibb.co/zh9x3Q0/headphone-2.png',
        'https://i.ibb.co/JBZk7sS/headphone-3.png',
        'https://i.ibb.co/SrPq3r0/headphone-4.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",
      quantity: 10,
      category: 'headphones',
      title: 'Headphones Wireless.',
      reviews: 7,
      price: 103.2,
      discount: 120,
    },
    {
      id: 14,
      img: [
        'https://i.ibb.co/n1YRvWJ/headphone-5.png',
        'https://i.ibb.co/WpkH1vq/headphone-6.png',
        'https://i.ibb.co/yRYbDCc/headphone-7.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",
      quantity: 5,
      category: 'headphones',
      title: 'Gaming Headphone.',
      reviews: 2,
      price: 180,
      discount: 13,
    },
    {
      id: 15,
      img: [
        'https://i.ibb.co/5FPhGtq/headphone-8.png',
        'https://i.ibb.co/vHP1TQf/headphone-9.png',
        'https://i.ibb.co/3mdtrcm/headphone-10.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",
      quantity: 3,
      category: 'headphones',
      title: 'Headphone with Mic',
      reviews: 7,
      price: 103.2,
      discount: 120,
    },
    {
      id: 16,
      img: [
        'https://i.ibb.co/jvGv6qf/mobile-1.png',
        'https://i.ibb.co/F3VPLLh/mobile-2.png',
        'https://i.ibb.co/rtmKcPg/mobile-3.png',
        'https://i.ibb.co/NpWtdts/mobile-4.png',
      ],
      description:
        "Jabra Evolve2 75 USB-A MS Teams Stereo Headset The Jabra Evolve2 75 USB-A MS Teams Stereo Headset has replaced previous hybrid working standards. Industry-leading call quality thanks to top-notch audio engineering. With this intelligent headset, you can stay connected and productive from the first call of the day to the last train home. With an ergonomic earcup design, this headset invented a brand-new dual-foam technology. You will be comfortable from the first call to the last thanks to the re-engineered leatherette ear cushion design that allows for better airflow. We can provide exceptional noise isolation and the best all-day comfort by mixing firm foam for the outer with soft foam for the interior of the ear cushions. So that you may receive Active Noise-Cancellation (ANC) performance that is even greater in a headset that you can wear for whatever length you wish. The headset also offers MS Teams Certifications and other features like Busylight, Calls controls, Voice guiding, and Wireless range (ft): Up to 100 feet. Best-in-class. Boom The most recent Jabra Evolve2 75 USB-A MS Teams Stereo Headset offers professional-grade call performance that leads the industry, yet Evolve2 75 wins best-in-class. Additionally, this includes a redesigned microphone boom arm that is 33 percent shorter than the Evolve 75 and offers the industry-leading call performance for which Jabra headsets are known. It complies with Microsoft's Open Office criteria and is specially tuned for outstanding conversations in open-plan workplaces and other loud environments when the microphone boom arm is lowered in Performance Mode",
      quantity: 5,
      category: 'Mobile Tablets',
      title: 'Galaxy Android Tablet',
      reviews: 2,
      price: 340,
      discount: 155,
    },
  ];

  products: BehaviorSubject<productDescription[]> = new BehaviorSubject<
    productDescription[]
  >(this.localProducts);

  getAllProducts(): Observable<productDescription[]> {
    return this.products;
  }
}

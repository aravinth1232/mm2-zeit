import { Wrench,CircleGauge,Hammer, History, Brush,  Package } from 'lucide-react';
import image1 from "../assets/services/bikebuild1.webp"
import image2 from "../assets/services/bikebuild2.webp"
import image3 from "../assets/services/bikebuild3.webp"  


import galleryImage1 from "../assets/1.png"
import galleryImage2 from "../assets/2.png"
import galleryImage3 from "../assets/3.png"
import galleryImage4 from "../assets/4.png"


export const changeToUrl = (name)=>{
  // return name.toLowerCase().trim().replace(/\s+/g, "-")
  return name.toLowerCase().trim().replaceAll(" ","-")
}


// services json
export const offerData = [
      {
        name: "Custom Bike Builds",
        icon: Wrench,
        slug: "custom-bike-builds",
        images: [

      {
        src :image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      }
    ]
      },
    
      {
        name: "Performance Upgrades",
        icon: CircleGauge,
        slug: "performance-upgrades",
        images: [

      {
        src :image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      }
    ]
      },
      {
        name: "Restoration Services",
        icon: History,
        slug: "restoration-services",
        images: [

      {
        src :image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      }
    ]
      },
       {
        name: "Paint and Custom Finishes",
        icon: Brush,
        slug: "paint-and-custom-finishes",
        images: [

      {
        src :image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      }
    ]
      },
      {
        name: "Bike Tuning and Servicing",
        icon: Hammer,
        slug: "bike-tuning-and-servicing",
        images: [

      {
        src :image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      }
    ]
      },
    {
        name: "Accessory Installation",
        icon: Package,
        slug: "accessory-installation",
        images: [

      {
        src :image1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      },
      {
        src :image3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam perferendis possimus dignissimos quis nesciunt ducimus iste sint molestias sequi, hic velit quasi culpa blanditiis animi iure fugiat eius consequatur aut necessitatibus praesentium quas tenetur. Dolor minus ipsa aperiam placeat libero ipsum, quod neque facere vel eveniet aliquam quas quam suscipit?"
      }
    ]
      },

     
];




//products json
export const galleryData = [
  {
    name: "White Scaven",
    slug: "white-scaven",
    images: [
  {
    src: galleryImage4,
    title: "Front View",
    description: "This is the front view of the White Scaven after complete remodeling. The headlamp section was upgraded with LED lighting and the mudguard was reshaped for a sharper look."
  },
  {
    src: galleryImage3,
    title: "Side View",
    description: "Side profile showcases a custom matte black and white dual-tone paint job. We also installed a new alloy wheel and enhanced the suspension setup for a better ride experience."
  },
  {
    src: galleryImage1,
    title: "Rear View",
    description: "This rear view highlights the new seat cushioning with premium leatherette finish. Tail lights were modified for a sleeker look, completing the aesthetic overhaul."
  }
]
  },

  {
    name: "Black Horse",
    slug: "black-horse",
    images: [
  {
    src: galleryImage4,
    title: "Front View",
    description: "This is the front view of the White Scaven after complete remodeling. The headlamp section was upgraded with LED lighting and the mudguard was reshaped for a sharper look."
  },
  {
    src: galleryImage3,
    title: "Side View",
    description: "Side profile showcases a custom matte black and white dual-tone paint job. We also installed a new alloy wheel and enhanced the suspension setup for a better ride experience."
  },
  {
    src: galleryImage1,
    title: "Rear View",
    description: "This rear view highlights the new seat cushioning with premium leatherette finish. Tail lights were modified for a sleeker look, completing the aesthetic overhaul."
  }
]
  },

  {
    name: "Pulsar 150",
    slug: "pulsar-150",
    images: [
  {
    src: galleryImage4,
    title: "Front View",
    description: "This is the front view of the White Scaven after complete remodeling. The headlamp section was upgraded with LED lighting and the mudguard was reshaped for a sharper look."
  },
  {
    src: galleryImage3,
    title: "Side View",
    description: "Side profile showcases a custom matte black and white dual-tone paint job. We also installed a new alloy wheel and enhanced the suspension setup for a better ride experience."
  },
  {
    src: galleryImage1,
    title: "Rear View",
    description: "This rear view highlights the new seat cushioning with premium leatherette finish. Tail lights were modified for a sleeker look, completing the aesthetic overhaul."
  }
]
  },
   {
    name: "Honda Triger 150",
    slug: "honda-triger-150",
    images: [
  {
    src: galleryImage4,
    title: "Front View",
    description: "This is the front view of the White Scaven after complete remodeling. The headlamp section was upgraded with LED lighting and the mudguard was reshaped for a sharper look."
  },
  {
    src: galleryImage3,
    title: "Side View",
    description: "Side profile showcases a custom matte black and white dual-tone paint job. We also installed a new alloy wheel and enhanced the suspension setup for a better ride experience."
  },
  {
    src: galleryImage1,
    title: "Rear View",
    description: "This rear view highlights the new seat cushioning with premium leatherette finish. Tail lights were modified for a sleeker look, completing the aesthetic overhaul."
  }
]
  },
  {
    name: "Apache RTR 160",
    slug: "apache-rtr-160",
    images: [
  {
    src: galleryImage4,
    title: "Front View",
    description: "This is the front view of the White Scaven after complete remodeling. The headlamp section was upgraded with LED lighting and the mudguard was reshaped for a sharper look."
  },
  {
    src: galleryImage3,
    title: "Side View",
    description: "Side profile showcases a custom matte black and white dual-tone paint job. We also installed a new alloy wheel and enhanced the suspension setup for a better ride experience."
  },
  {
    src: galleryImage1,
    title: "Rear View",
    description: "This rear view highlights the new seat cushioning with premium leatherette finish. Tail lights were modified for a sleeker look, completing the aesthetic overhaul."
  }
]
  },

 
 
];

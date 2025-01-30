import mongoose, { Schema } from "mongoose";
const shortid = require("shortid");

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      default: shortid.generate,
    },
    cat_name: {
      type: String,
      // required: [true, "Please select category for this product"],
    },
    subcat_name: {
      type: String,
    },
    generices: {
      type: String,
    },
    product_code: {
      type: String,
      default: shortid.generate,
    },
    product_name: {
      type: String,
      required: [true, "Please enter product Name"],
      trim: true,
    },
    url: {
      type: String,
    },
    genericname: {
      type: String,
    },
    brand: {
      type: String,
    },
    manufactuer: {
      type: String,
    },
    manufactueraddress: {
      type: String,
    },
    tabscount: {
      type: String,
    },
    strength: {
      type: String,
    },
    package: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      maxLength: [15, "Price cannot exceed 5 characters"],
      default: 0.0,
    },
    // product_img: {
    //   type: String,
    // },
    description: {
      type: String,
    },
    disclaimer: {
      type: String,
    },
    stock: {
      type: String,
      default: "In Stock",
    },
    maxQuantity: {
      type: Number,
      required: true,
      default: 5,
    },
    stockavail: {
      type: String,
      maxLength: [15, "Stock cannot exceed 5 characters"],
      default: 50,
    },
    saleprice: {
      type: String,
    },
    percentage: {
      type: String,
    },
    rexrequired: {
      type: String,
    },
    orgin: {
      type: String,
    },
    storage: {
      type: String,
    },
    status: {
      type: String,
      default: "Active",
    },
    writebyid: {
      type: String,
    },
    reviewbyid: {
      type: String,
    },
    //   faq: {
    //     type: String,
    //   },
    //   reference: {
    //     type: String,
    //   },
    metatitle: {
      type: String,
    },
    metakeyword: {
      type: String,
    },
    metadesc: {
      type: String,
    },
    varient: {
      type: String,
    },
    imagealt: {
      type: String,
    },
    //   vedio: {
    //     type: String,
    //   },
    //   vedioalt: {
    //     type: String,
    //   },
    //   userupdate: {
    //     type: String,
    //   },
    //   updatetimestamp: {
    //     type: Date,
    //     default: Date.now,
    //   },
    //   userid: {
    //     type: String,
    //   },
    date: {
      type: Date,
      default: Date.now,
    },
    referwebsite: {
      type: String,
    },
    //   keybenefits: {
    //     type: String,
    //   },
    //   keyingredients: {
    //     type: String,
    //   },
    expires: {
      type: String,
    },
    usesofmeds: {
      type: String,
    },
    useofbenefits: {
      type: String,
    },
    indicat: {
      type: String,
    },
    machanism: {
      type: String,
    },
    medicinework: {
      type: String,
    },
    contraindications: {
      type: String,
    },
    sideeffects: {
      type: String,
    },
    faqs: {
      type: String,
    },
    pregnancy: {
      type: String,
    },
    breastfeeding: {
      type: String,
    },
    kidneyproblem: {
      type: String,
    },
    liverdisease: {
      type: String,
    },
    heartdisease: {
      type: String,
    },
    asthma: {
      type: String,
    },
    takemedicine: {
      type: String,
    },
    adult: {
      type: String,
    },
    childrenmed: {
      type: String,
    },
    elderlymed: {
      type: String,
    },
    alcohol: {
      type: String,
    },
    driving: {
      type: String,
    },
    warnings: {
      type: String,
    },
    talkdoctor: {
      type: String,
    },
    instructions: {
      type: String,
    },
    druginteraction: {
      type: String,
    },
    drugfood: {
      type: String,
    },
    drugdiease: {
      type: String,
    },
    fooditems: {
      type: String,
    },
    overdose: {
      type: String,
    },
    misseddose: {
      type: String,
    },
    disposal: {
      type: String,
    },
    fasttag: {
      type: String,
    },
    refer: {
      type: String,
    },
    //   ingredients: {
    //     type: String,
    //   },
    //   direction: {
    //     type: String,
    //   },
    //   dosages: {
    //     type: String,
    //   },
    //   precaution: {
    //     type: String,
    //   },
    prostatus: {
      type: String,
      default: "Active",
    },
    paymenttype: {
      type: String,
    },
    retunpolicy: {
      type: String,
    },
    gst: {
      type: String,
    },
    hsn: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product ||
  mongoose.model("Product", productSchema, "product");

export default Product;

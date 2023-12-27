/* eslint-disable no-unused-vars */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
// import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { DataGrid } from "@mui/x-data-grid";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  AttributeMasterListDetails,
  AttributeValueListDetails,
  // AttributeValueallListDetails,
  FeaturesMasterListDetails,
  FeaturesValueListDetails,
} from "../actions/AttributeActions";
import { brandList } from "../actions/brandAction";
import {
  CombinationChildList,
  CombinationListValue,
  catProductList,
  deleteChildImages,
  saveCatologProduct,
  saveCombination,
  updateCatProduct,
  updateCatStock,
} from "../actions/catProductAction";
DataGrid;

import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
// import Card from "@mui/material/Card";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ClearIcon from "@mui/icons-material/Clear";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import { createFilterOptions } from "@mui/material/Autocomplete";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "../../node_modules/@material-ui/core/index";
import { makeStyles } from "../../node_modules/@material-ui/styles/index";
import {
  CategoryChildNewLists,
  CategoryChildallLists,
  CategoryMasterallLists,
  CategorygrandChildNewLists,
  grandChildCategoryLists,
} from "../actions/categoryMasterAction";
import {
  CAT_PRODUCT_UPDATE_RESET,
  COMBINATION_SAVE_RESET,
  COMBINATION_UPDATE_RESET,
  IMAGE_DELETE_RESET,
} from "../constants/catBrandConstant";

import { useNavigate } from "react-router-dom";
import { Autocomplete } from "../../node_modules/@mui/material/index";
import { CombotaxDetails, deleteCombolist } from "../actions/ComboAction";
import { COMBO_DELETE_RESET } from "../constants/ComboConstants";
import OptionsScreen from "./OptionsScreen";
import ProdPricingScreen from "./ProdPricingScreen";
import ProductQuantitiesSreen from "./ProductQuantitiesSreen";
import ProductShippingScreen from "./ProductShippingScreen";
import SeoScreen from "./SeoScreen";

import {
  QuantityLastdataDetails,
  QuantityListDetails,
  QuantityfindOneaDetails,
} from "../actions/ProductQuantitiesAction";
import { TaxesList } from "../actions/TaxesAction";
import {
  PricingFindOneDetails,
  PricingLastListDetails,
  PricingListDetails,
} from "../actions/prodAction";
import { data, event } from "jquery";

function CatCreateProductScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { handleSubmit: handleSubmit1 } = useForm();

  const catProductSave = useSelector((state) => state.catProductSave);
  const { productId } = catProductSave;

  const catalogProd = useSelector((state) => state.catalogProd);
  const { catProducts } = catalogProd;

  const FeaturesList = useSelector((state) => state.FeaturesList);

  const { Featuresdetails } = FeaturesList;

  const FeaturesValueList = useSelector((state) => state.FeaturesValueList);
  const { Featuresvaluedetails } = FeaturesValueList;

  const brandReduce = useSelector((state) => state.brandReduce);
  const { brandLists } = brandReduce;

  const CategoryMasterallList = useSelector(
    (state) => state.CategoryMasterallList,
  );
  const { categorymasterallList } = CategoryMasterallList;

  const AttributeValueList = useSelector((state) => state.AttributeValueList);
  const { attributeValuedetails } = AttributeValueList;

  let datas = AttributeValueList.attributeValuedetails;
  const [combValues, setCombValues] = useState([]);

  let ramData = [];
  let sizeData = [];
  let colorData = [];

  const [checkedItems, setCheckedItems] = useState([]);

  // SelectRam Check

  const handleCheckboxRamChange = (value, event) => {
    let selectedRam = [];
    datas?.map((items) => {
      if (items.value == value) {
        selectedRam.push(items);
        // combValues.push(items)
      }
    });
    let val = [...combValues, ...selectedRam];
    setCombValues(val);
  };

  // SelectSize Check
  let selectedSize = [];
  const handleCheckboxSizeChange = (value, event) => {
    let sizeId = datas?.map((items) => {
      if (items.value == value) {
        selectedSize.push(items);
      }
    });
    let val = [...combValues, ...selectedSize];
    setCombValues(val);
  };

  // SelectColor Check
  let selectedColor = [];
  const handleCheckboxColorChange = (value, event) => {
    let colorId = datas?.map((items) => {
      if (items.value == value) {
        selectedColor.push(items);
      }
    });
    let val = [...combValues, ...selectedColor];
    setCombValues(val);
  };

  const Combinationchild = useSelector((state) => state.Combinationchild);
  const { childComination } = Combinationchild;

  const catCom = useSelector((state) => state.catCom);
  const { success: successcom } = catCom;
  const ComboUpdate = useSelector((state) => state.ComboUpdate);
  const { success: deleteCombo } = ComboUpdate;

  const comboDelete = useSelector((state) => state.ComboDelete);
  const { success: deleteImages } = comboDelete;

  const cominationstockupdate = useSelector(
    (state) => state.cominationstockupdate,
  );
  const { success: updatecomina } = cominationstockupdate;

  const catalogProdUpdate = useSelector((state) => state.catalogProdUpdate);
  const { success: updateprod } = catalogProdUpdate;

  // Select All*****************Edit Section*************

  const params = useParams();
  const ProdId = params.id;

  const prodctObj = catProducts?.find((item) => item?._id === ProdId);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });

  /************* Product Quantity and Pricing details Updated*/

  const QuantityLastList = useSelector((state) => state.QuantityLastList);
  const { quantitylist } = QuantityLastList;

  const QuantityFindOne = useSelector((state) => state.QuantityFindOne);
  const { quantityOnelist } = QuantityFindOne;

  const PriceFindOneList = useSelector((state) => state.PriceFindOneList);
  const { pricingOnelist } = PriceFindOneList;

  let qtydata = [];
  {
    quantitylist?.map((value) => qtydata.push(value._id));
  }

  const PriceLastList = useSelector((state) => state.PriceLastList);
  const { pricinglist } = PriceLastList;

  let pricedata = [];
  {
    pricinglist?.map((item) => pricedata.push(item._id));
  }

  const taxesList = useSelector((state) => state.taxesList);
  const { taxes } = taxesList;

  const QuantityList = useSelector((state) => state.QuantityList);
  const { quantity } = QuantityList;

  const qunObj = quantity?.find((item) => item?.mprodId === ProdId);
  const [quantityId, setquantityId] = useState([qunObj?._id]);
  const Removecatproduct = useSelector((state) => state.Removecatproduct);
  const { success: RemovecatproductSuccess } = Removecatproduct;
  const PriceList = useSelector((state) => state.PriceList);
  const { pricingdetail } = PriceList;

  const pricingObj = pricingdetail?.find((item) => item?.mprodId === ProdId);

  const [priceId, setpriceId] = useState([pricingObj?._id]);

  // **********************Edit Section********************************

  const [brand, setBrand] = useState(0);
  const [relatProd, setRelatProduct] = useState(0);

  const [category, setCategory] = useState(0);
  const [dropimg, setDropimg] = useState([]);

  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [referenced, setreferenced] = useState("");

  const [tabIndex, setTabIndex] = useState(0);

  // ----Save----

  const [featurestype, setFeaturestype] = useState([]);
  const [featurestypevalue, setFeaturestypevalue] = useState([]);
  const [brandId, setBrandId] = useState("");

  const [newProdname, setNewProdname] = useState(prodctObj?.prodname);
  const [newsummary, setNewsummary] = useState(prodctObj?.summary);

  const [newdescription, setNewdescription] = useState(prodctObj?.description);

  const [newfeature, setNewfeature] = useState(prodctObj?.featureId);

  const [newfeaturestypevalue, setNewfeaturestypevalue] = useState([]);

  const [newbrandId, setNewbrandId] = useState(prodctObj?.brand);
  const [newcombination, setNewcombination] = useState(prodctObj?.combination);

  const [editproId, seteditproId] = useState(prodctObj?._id);

  const [newreference, setNewreference] = useState(prodctObj?.reference);
  const [newQuantity, setNewQuantity] = useState();

  const [newtaxexcluded, setNewtaxexcluded] = useState(prodctObj?.taxexcluded);

  const [newtaxincluded, setNewtaxincluded] = useState(prodctObj?.taxincluded);

  const [newParentCategory, setNewParentCategory] = useState(prodctObj?.catId);

  const [newchildCategory, setNewChildCategory] = useState(
    prodctObj?.catChildId,
  );

  const [grandchildCategory, setNewgrandchildCategory] = useState(
    prodctObj?.grandchildId,
  );

  // ************************Edit Form array section*********************************

  const [field, setField] = useState(
    newfeature?.length > 0 ? [...newfeature] : [],
  );

  // <==========************* Feature value ****************=========>

  const [fieldvalue, setFieldvalue] = useState([...newfeaturestypevalue]);

  /*********Tax save method ********* */

  const [Prodexclusive, setProdexclusive] = useState();
  const [Prodinclusive, setProdinclusive] = useState();
  const [Taxprice, setTaxprice] = useState();

  const taxesrule = (e) => {
    setTaxprice(e.target.value);
  };

  const handlereference = (e) => {
    setreferenced(e.target.value);
    let code = e.target.value;
    for (let i = 0; i < catProducts?.length; i++) {
      if (code === catProducts[i]?.reference) {
        window.confirm("This reference code is already exist");
      }
    }
  };
  const setpercentage = (e) => {
    const taxper = taxes?.find((x) => x._id === e);
    let test = (Prodexclusive * (taxper ? taxper.Rate : 0)) / 100;
    let amt = test + parseInt(Prodexclusive);
    setProdinclusive(amt);
  };

  const handleProdexclusive = (e) => {
    setProdexclusive(e.target.value);
    const taxper = taxes?.find((x) => x._id === Taxprice);

    let test = (e.target.value * (taxper ? taxper.Rate : 0)) / 100;
    let amt = test + parseInt(e.target.value);
    setProdinclusive(amt);
  };

  /************Tax update method */
  const [EditProdexclusive, setEditProdexclusive] = useState();
  const [EditProdinclusive, setEditProdinclusive] = useState();
  const [EditTaxprice, setEditTaxprice] = useState(prodctObj?.taxrule);

  // ************************combination*********************************
  const [combination, setCombination] = useState("Simple Product");

  // eslint-disable-next-line no-unused-vars
  const [ind, setInd] = useState("");

  const [CombStock, setCombStock] = useState([]);
  const [CombStockId, setCombStockId] = useState("");
  const [ComnewImg, setComNewimg] = useState();
  const [Comopen, setComOpen] = useState(false);
  const [gridComopen, setgridComOpen] = useState(0);
  const [selectedVal, seSelectedVal] = useState(0);

  const handleChangInput = (e, index) => {
    let value = e.target.value;
    let values = value;
    // setCombStock(values)
    CombStock.push({ id: index, val: values });
  };

  const [finalValue, setfinalValue] = useState([]);
  const stockCount = () => {
    let arr = [];
    let indexes = [];
    CombStock.map((items, index) => {
      if (!arr.includes(items.id)) {
        arr.push(items.id);
        indexes?.push(index, arr);
        finalValue?.push({
          id: CombStock[index - 1]?.id,
          val: CombStock[index - 1]?.val,
        });
      }
    });

    let lastValue = CombStock[CombStock.length - 1];
    finalValue.splice(0, 1);
    finalValue.push(lastValue);
  };

  const handleStockudateInput = (event, params) => {
    let updateid = params?.row?.id;
    setCombStockId([...CombStockId, updateid]);
  };

  const handleChangecombination = (event) => {
    if (combination == "Simple Product") {
      setCombination(event.target.value);
    } else {
      setCombination(event.target.value);
    }
  };

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.attributename,
  });

  //  ************************combination section Start******************************
  const [inputValue, setInputValue] = useState("");
  let subtype = [];
  let defaultOption = [];
  const [state, setState] = useState();
  {
    attributeValuedetails
      ?.filter((item) => {
        return item.allId === inputValue;
      })
      ?.map((item) => {
        defaultOption = [
          ...defaultOption,
          {
            ["_id"]: item?._id,
            ["attributeVlaue"]: item?.attributeVlaue,
            ["value"]: item?.value,
            ["attributename"]: item?.attributename,
            ["color"]: item?.color,
            ["allId"]: item?.allId,
          },
        ];
        // defaultOption.push(test)
      });
  }
  const combinationhandleChange = (event, value) => {
    {
      value?.map((item) => {
        setInputValue(item?._id);
      });
    }
    setState(value);
    setCombValues(value);
  };
  if (defaultOption?.length < state?.length) {
    for (let i = 0; i < state?.length; i++) {
      defaultOption.push(state[i]);
    }
  }
  if (defaultOption) {
    for (let i = 0; i < defaultOption?.length; i++) {
      let item = {
        ["id"]: defaultOption[i]?._id,
        ["atributevalue"]: defaultOption[i]?.value,
        ["atributename"]: defaultOption[i]?.attributename,
        ["color"]: defaultOption[i]?.color,
        ["allId"]: defaultOption[i]?.allId,
      };
      subtype.push(item);
    }
  }

  const CreateCombination = () => {
    if (combination === "true") {
      dispatch(
        saveCombination({
          catlogCombination: subtype,
        }),
      );
      window.confirm("Combination Generate  SuccessFully!");
      setgridComOpen(1);
    }
    if (newcombination === "true") {
      dispatch(
        saveCombination({
          catlogCombination: subtype,
          proId: editproId,
        }),
      );
      window.confirm("Combination Generate  SuccessFully!!!");
      event.target.reset();
      seteditproId("");
      setgridComOpen(1);
    }
  };

  const HandlecombSave = (event) => {
    stockCount();
    let stockData = [];
    for (let i = 0; i < finalValue?.length; i++) {
      let obj = {
        id: finalValue[i]?.id?.id,
        val: finalValue[i]?.val,
      };
      stockData.push(obj);
    }

    dispatch(updateCatStock(stockData));

    setCombStock("");
    setCombStockId("");
  };

  const handleComClickOpen = (e) => {
    setComNewimg(e.target.src);
    setComOpen(true);
  };
  const handleComClose = () => {
    setComOpen(false);
  };

  // ***********************Features dropdownfunction[  save  ] ***********************************
  const HandleChange = (e, i) => {
    if (i == i) {
      if (featurestype[i] == undefined) {
        setFeaturestype([...featurestype, { ["id"]: e.target.value }]);
        const indexid = Featuresvaluedetails.find(
          (x) => x.featuretype === e.target.value,
        );
        setFeaturestypevalue([...featurestypevalue, { ["id"]: indexid._id }]);
      } else {
        if (i == featurestype.indexOf(featurestype[i])) {
          featurestype[i].id = e.target.value;
          setFeaturestype([...featurestype]);
        }
        const indexid = Featuresvaluedetails.find(
          (x) => x.featuretype === featurestype[i]?.id,
        );
        featurestypevalue[i].id = indexid._id;
        setFeaturestypevalue([...featurestypevalue]);
      }
    }
  };

  const handleFeatureValue = (e, i) => {
    if (i == i) {
      if (featurestypevalue[i] == undefined) {
        setFeaturestypevalue([
          ...featurestypevalue,
          { ["id"]: e.target.value },
        ]);
      } else {
        if (i == featurestypevalue.indexOf(featurestypevalue[i])) {
          featurestypevalue[i].id = e.target.value;
          setFeaturestypevalue([...featurestypevalue]);
        }
      }
    }
  };
  // ***********************Edit section *********************

  const handleappend = () => {
    append({});
  };

  // *********************************************
  const [images, setImage] = useState();
  const [subimg, setSubImage] = useState();
  const [Delete, setDelete] = useState("");

  useEffect(() => {
    if (successcom) {
      dispatch({ type: COMBINATION_SAVE_RESET });
      dispatch(catProductList());
    }
    if (RemovecatproductSuccess) {
      dispatch({ type: IMAGE_DELETE_RESET });
    }
    if (updateprod) {
      dispatch({ type: CAT_PRODUCT_UPDATE_RESET });
      dispatch(catProductList());
    }
    if (deleteImages) {
      dispatch({ type: COMBO_DELETE_RESET });
      dispatch(catProductList());
    }
    dispatch(catProductList());
    dispatch(FeaturesMasterListDetails());
    dispatch(brandList());
    dispatch(FeaturesValueListDetails());
    dispatch(CategoryMasterallLists());
    dispatch(CategoryChildallLists());
    dispatch(grandChildCategoryLists());
    dispatch(CategoryChildNewLists());
    dispatch(CategorygrandChildNewLists());
    dispatch(AttributeMasterListDetails());
    dispatch(AttributeValueListDetails());
    dispatch(CombinationListValue());
    dispatch(CombinationChildList());
    dispatch(TaxesList());
    dispatch(PricingListDetails());
    dispatch(QuantityListDetails());
    dispatch(QuantityLastdataDetails());
    dispatch(PricingLastListDetails());
    dispatch(QuantityfindOneaDetails(ProdId));
    dispatch(PricingFindOneDetails(ProdId));
    // dispatch(AttributeValueallListDetails())
    if (prodctObj) {
      const fetchBusinesses = async () => {
        const img = await Axios.get(
          `/api/uploads/productshow/${prodctObj?._id}`,
          {
            // responseType: "blob",
          },
        );

        setImage(img.data);
      };

      const fetchBusines = async () => {
        const subimg = await Axios.get(
          `/api/uploads/proshowsub/${prodctObj?._id}`,
          {},
        );

        setSubImage(subimg.data);
      };
      fetchBusines();
      fetchBusinesses();
    }
  }, [
    deleteImages,
    updateprod,
    successcom,
    deleteCombo,
    RemovecatproductSuccess,
  ]);

  useEffect(() => {
    if (updatecomina) {
      dispatch({ type: COMBINATION_UPDATE_RESET });
      dispatch(CombinationChildList());
    }
    if (deleteCombo) {
      dispatch(CombinationChildList());
    }
  }, [updatecomina, deleteCombo]);

  var file = new File([subimg], "name");

  const handleTabChange = (event, newTabIndex) => {
    seSelectedVal(event.target.innerText);

    setTabIndex(newTabIndex);
  };

  const Combinations = `
  Combinations are the different variations of a product, with attributes like its size, 
  weight or color taking different values. Does your product require combinations?
`;

  const reference = `
  Your reference code for this product. Allowed special characters: .-_#.
`;

  //   const quantity = `
  //   How many products should be available for sale?
  // `;

  const price = `
  This is the net sales price for your customers. 
  The retail price will automatically be calculated using the applied tax rate.
`;
  price;

  const categories = `
  Where should the product be available on your site?
   The main category is where the product appears by default: this is the category which is seen in the product page's URL.
   Disabled categories are written in italics.
`;

  const newcategories = `
If you want to quickly create a new category, you can do it here.
 Don’t forget to then go to the Categories page to fill in the needed details (description, image, etc.).
 A new category will not automatically appear in your shop's menu, please read the Help about it.
`;

  //   const delivery = `
  // Display delivery time for a product is advised for merchants selling in Europe to comply with the local laws.
  // `;

  //   const shipping = `
  // If a carrier has a tax, it will be added to the shipping fees. Does not apply to free shipping.
  // `;

  const condition = `
Not all shops sell new products.
 This option enables you to indicate the condition of the product.
 It can be required on some marketplaces.
`;
  const [CoverStatus, setCoverStatus] = useState("");
  const [dropImage, setDropZoneImage] = useState("");

  const [ImageSelect, setImageSelect] = useState("");
  const [ImageSelectblob, setImageSelectblob] = useState("");
  const [ImageDelete, setImageDelete] = useState("");

  const [checked, setChecked] = useState("");
  const handleChangeChekce = (event) => {
    setChecked(event.target.checked);
  };

  const ImagHandleSelect = (e, index) => {
    setImageSelectblob(e?.target?.src);
    setImageSelect(index);
    setImageDelete(0);
    setChecked(false);
    setCoverStatus("");
    setDropZoneImage(dropimg[index]);
  };

  useEffect(() => {
    setNewQuantity(quantityOnelist?.Qty);
  }, [quantityOnelist]);

  useEffect(() => {
    setEditProdexclusive(pricingOnelist?.RetailExcl);
    setEditProdinclusive(pricingOnelist?.RetailIncl);
    setEditTaxprice(pricingOnelist?.priceGroup);
  }, [pricingOnelist]);

  // *****************************************************edit cover Images**************************
  const [Checkededit, setCheckededit] = useState("");
  const [SelectImage, setSelectImage] = useState("");
  const [testImage, settestImage] = useState(null);
  const [testImages, settestImages] = useState(null);
  const handleCheckedit = (event) => {
    setCheckededit(event.target.checked);
  };

  const handleChangeEditImage = () => {
    if (Checkededit == true) {
      settestImage(SelectImage);
    }
  };

  const ImagHandleImage = (image) => {
    settestImages(image);
    setSelectImage(null);
    setCheckededit(null);
  };
  const ImagHandleSelecttest = (e, index) => {
    settestImages(null);
    setSelectImage(e);
    setCheckededit(null);
  };

  // ********************************************************
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setDropimg(selectedFilesArray);
    const imagesArray = selectedFilesArray?.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  const deleteHandlerstock = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCombolist(id));
    }
  };
  function deleteHandler(image) {
    setSelectedImages(selectedImages?.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }
  function deleteHandlerpage() {
    setImageDelete("Delete");
  }
  // eslint-disable-next-line no-unused-vars
  const [errorUpload, setErrorUpload] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  useEffect(
    () => {
      setNewProdname(prodctObj?.prodname),
        setNewreference(prodctObj?.reference),
        setNewQuantity(prodctObj?.quantity),
        setNewtaxexcluded(prodctObj?.taxexcluded),
        setNewtaxincluded(prodctObj?.taxincluded),
        settreeId(prodctObj?.catId),
        setchildId(prodctObj?.catChildId),
        setGrandchildId(prodctObj?.grandchildId);
      if (prodctObj) {
        const fetchBusinesses = async () => {
          const img = await Axios.get(
            `/api/uploads/productshow/${prodctObj?._id}`,
            {
              // responseType: "blob",
            },
          );

          setImage(img.data);
        };

        const fetchBusines = async () => {
          const subimg = await Axios.get(
            `/api/uploads/proshowsub/${prodctObj?._id}`,
            {},
          );
          setSubImage(subimg.data);
        };
        fetchBusines();
        fetchBusinesses();
      }
    },
    [prodctObj?.prodname],
    [prodctObj?.imageId],
    [prodctObj?.combination],
  );

  const submitHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", dropImage);
    formData.append("coverstatus", CoverStatus);

    for (let i = 0; i < dropimg?.length; i++) {
      formData.append("images", dropimg[i]);
    }

    for (var pair of formData.entries()) {
      pair[1];
    }

    try {
      const { data } = await Axios.post("/api/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
          // Product: `Bearer ${product}`,
        },
      });

      dispatch(
        saveCatologProduct({
          prodname: e.prodname,
          fileId: data.image._id,
          summary: summary,
          description: description,
          featureId: featurestype,
          featurestypevalue: featurestypevalue,
          brand: brandId,
          search: e.search,
          reference: referenced,
          combination: combination,
          quantity: e.quantity,
          taxexcluded: Prodexclusive,
          taxincluded: Prodinclusive,
          taxrule: Taxprice,
          catId: parentId,
          catChildId: childId,
          grandchildId: grandchildId,
          qty: e.qty,
          mqty: e.mqty,
          SLocation: e.SLocation,
          newcheck: e.newcheck,
          denyorders: e.Denyorders,
          Alloworders: e.Alloworders,
          Usedefault: e.Usedefault,
          stockin: e.stockin,
          stockout: e.stockout,
          date: e.date,
          height: e.height,
          width: e.width,
          depth: e.depth,
          weight: e.weight,
          qtyId: qtydata,
          priceId: pricedata,
        }),
      );
      window.confirm("Product Details Saved SuccessFully!!");
      event.target.reset();
    } catch (error) {
      setErrorUpload(error.message);
    }
  };

  const [CoverImages, setCoverImages] = useState("");

  const updateHandler = async () => {
    let test = [];
    let coverimage;
    for (let i = 0; i < subimg?.length; i++) {
      if (subimg[i].filename == testImage) {
        subimg[i].filename = images;
        coverimage = testImage;
      }
      test.push(subimg[i].filename);
    }

    let item = subimg.find((x) => x.filename === images);
    if (!item) {
      coverimage = images;
    }
    const formData = new FormData();
    formData.append("image", coverimage);
    for (let i = 0; i < test?.length; i++) {
      formData.append("images", test[i]);
    }
    for (var pair of formData.entries()) {
      pair[1];
    }
    try {
      const { data } = await Axios.put(
        `/api/uploads/updates/${ProdId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userInfo.token}`,
            // Product: `Bearer ${product}`,
          },
        },
      );

      dispatch(
        updateCatProduct({
          _id: ProdId,
          prodname: newProdname,
          summary: newsummary,
          description: newdescription,
          featureId: newfeature,
          featurestypevalue: newfeaturestypevalue,
          brand: newbrandId,
          combination: newcombination,
          reference: newreference,
          quantity: newQuantity,
          taxexcluded: EditProdexclusive,
          taxincluded: EditProdinclusive,
          taxrule: EditTaxprice,
          catId: parentId,
          catChildId: childId,
          grandchildId: grandchildId,
          quanId: quantityId,
          priceId: priceId,
        }),
      );
      window.confirm("Brand Details Updated SuccessFully!!");
      event.target.reset();
    } catch (error) {
      setErrorUpload(error.message);
    }
  };

  //   const deleteHandlertest = async (i) => {
  //     let item = subimg[i];

  //     try {
  //       dispatch(deleteChildImages(ProdId, item));
  //     } catch (err) {}
  //   };

  //  ******************Multy Delete Section************************* //

  //  ******************Multy Delete Section************************* //

  const handleChangeSaveImage = () => {
    if (checked === true) {
      setCoverImages(ImageSelectblob);
      setImageSelect("");
      setCoverStatus("coverimage");
    }
  };
  // *************************************************************

  const useStyles = makeStyles(() => ({
    label: {
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-active": { fontSize: "14px" },
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-disabled": { fontSize: "14px" },
      "& .Mui-disabled .MuiStepIcon-root": { fontSize: "30px" },
      "& .Mui-active .MuiStepIcon-root": { fontSize: "30px" },
      "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
        fontSize: "30px",
        color: "green",
      },
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": { fontSize: "14px" },
    },
    cssLabel: {
      "&.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root": {
        fontSize: "14px",
      },
      "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
        fontSize: "14px",
      },
    },
    cssFocused: {
      "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
        fontSize: "14px",
      },
    },
    selected: {
      bgcolor: "red",
      color: "white",
    },
  }));

  const classes = useStyles();

  const [parentId, settreeId] = useState("");

  const [childId, setchildId] = useState("");

  const [grandchildId, setGrandchildId] = useState("");

  const [checkedtree, setCheckedtree] = useState();

  const handleSelectedItems = (event, nodeId) => {
    const items = nodeId.split("-");
    let parent = items[0];
    let child = items[1];
    let grantChild = items[2];
    if (grantChild) {
      setCheckedtree(true);
    }

    settreeId(parent);
    setchildId(child);
    setGrandchildId(grantChild);
  };

  const [Parent, setParent] = useState("");

  const renderTree = (nodes, i) => (
    <TreeItem
      key={nodes._id}
      nodeId={nodes?._id}
      nodeIds={nodes}
      label={<Typography sx={{ fontSize: 13 }}>{nodes?.name}</Typography>}
    >
      {Array.isArray(nodes?.children)
        ? nodes?.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  const handleSelectedItemss = (event, nodeId) => {
    setParent(nodeId);
  };

  // **********************COMINATION SCREEN**************************************

  function getnumId(comproducts) {
    return `${
      comproducts.row.CombinationId
        ? catProducts?.find((x) => x?._id == comproducts.row.CombinationId)
            ?.prodname
        : ""
    }`;
  }
  const navigate = useNavigate();
  const editCombination = (obj) => {
    navigate(`/comboEdit/${obj.id}`);
    dispatch(CombotaxDetails(obj.CombinationId));
  };

  const ComList = childComination
    ?.filter((item) => {
      return item.CombinationId == productId?._id;
    })
    ?.map((item) => {
      return {
        id: item._id,
        comname: item.comname,
        comvalue: item.comvalue,
        color: item.color,
        comstock: item.comstock,
        CombinationId: item.CombinationId,
      };
    });

  const assemList = childComination
    ?.filter((item) => {
      return item.CombinationId === prodctObj?._id;
    })
    ?.map((item) => {
      return {
        id: item._id,
        comname: item.comname,
        comvalue: item.comvalue,
        color: item.color,
        comstock: item.comstock,
        CombinationId: item.CombinationId,
        filename: item.filename,
      };
    });

  const combinationcolumns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
    },
    {
      field: "imageId",
      headerName: "Product Image",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Avatar
            onClick={handleComClickOpen}
            sx={{ height: "50px", width: "50px", cursor: "pointer" }}
            src={`/api/uploads/showsubimglatest/${params?.row?.filename}`}
            alt="avatar"
          />
        );
      },
    },
    {
      field: "",
      headerName: "Product Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getnumId,
    },
    {
      field: "comname",
      headerName: "Attribute Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "comvalue",
      headerName: "Attribute Type",
      flex: 1,
      headerClassName: "super-app-theme--header",
      // valueGetter: getnumId,
    },
    {
      field: "color",
      headerName: "Attribute Color",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) =>
        params.row.color == "undefined" ? "" : params.row.color,
    },
    {
      field: "comstock",
      headerName: "Current Stock",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Edit",
      headerName: "Stock",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <TextField
          size="small"
          Value={CombStock}
          onChange={(event) => handleChangInput(event, params)}
          onClick={(event) => handleStockudateInput(event, params)}
          id="Stock"
          type="name"
        />
      ),
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editCombination(params.row)}
            style={{
              // color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            // onClick={() => deleteCombination(params)}
            onClick={() => deleteHandlerstock(params.row.id)}
            style={{ color: "#FF3333", fontSize: 20, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ mt: -1, mb: 1 }}>
        Create Products
      </Typography>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ display: "flex", flexDerection: "row", mt: 1, mb: 1 }}
      >
        <Link
          to="/"
          style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "12px",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Home</Typography>
        </Link>
        <Link
          to="/product"
          style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "12px",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Products</Typography>
        </Link>
        <Typography sx={{ fontSize: "14px" }}>Create Products</Typography>
      </Breadcrumbs>

      <Box>
        {combination === "true" ? (
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            indicatorColor="#00A787"
          >
            <Tab
              style={{
                fontSize: "13px",
                color: tabIndex === 0 ? "#00A787" : "inherit",
                borderBottom:
                  tabIndex === 0
                    ? "2px solid #00A787"
                    : "2px solid transparent",
              }}
              label="Basic Settings"
            />
            <Tab
              style={{
                fontSize: "13px",
                color: tabIndex === 1 ? "#00A787" : "inherit",
                borderBottom:
                  tabIndex === 1
                    ? "2px solid #00A787"
                    : "2px solid transparent",
              }}
              label="Combination"
            />
            <Tab
              style={{
                fontSize: "13px",
                color: tabIndex === 2 ? "#00A787" : "inherit",
                borderBottom:
                  tabIndex === 2
                    ? "2px solid #00A787"
                    : "2px solid transparent",
              }}
              label="Quantities"
            />
            <Tab
              style={{
                fontSize: "13px",
                color: tabIndex === 3 ? "#00A787" : "inherit",
                borderBottom:
                  tabIndex === 3
                    ? "2px solid #00A787"
                    : "2px solid transparent",
              }}
              label="Shipping"
            />
            <Tab
              style={{
                fontSize: "13px",
                color: tabIndex === 4 ? "#00A787" : "inherit",
                borderBottom:
                  tabIndex === 4
                    ? "2px solid #00A787"
                    : "2px solid transparent",
              }}
              label="Pricing"
            />
            <Tab
              style={{
                fontSize: "13px",
                color: tabIndex === 5 ? "#00A787" : "inherit",
                borderBottom:
                  tabIndex === 5
                    ? "2px solid #00A787"
                    : "2px solid transparent",
              }}
              label="SEO"
            />
            <Tab
              style={{
                fontSize: "13px",
                color: tabIndex === 6 ? "#00A787" : "inherit",
                borderBottom:
                  tabIndex === 6
                    ? "2px solid #00A787"
                    : "2px solid transparent",
              }}
              label="Options"
            />
          </Tabs>
        ) : (
          <>
            {" "}
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              indicatorColor="#00A787"
            >
              <Tab
                style={{
                  fontSize: "13px",
                  color: tabIndex === 0 ? "#00A787" : "inherit",
                  borderBottom:
                    tabIndex === 0
                      ? "2px solid #00A787"
                      : "2px solid transparent",
                }}
                label="Basic Settings"
              />

              <Tab
                style={{
                  fontSize: "13px",
                  color: tabIndex === 1 ? "#00A787" : "inherit",
                  borderBottom:
                    tabIndex === 1
                      ? "2px solid #00A787"
                      : "2px solid transparent",
                }}
                label="Quantities"
              />
              <Tab
                style={{
                  fontSize: "13px",
                  color: tabIndex === 2 ? "#00A787" : "inherit",
                  borderBottom:
                    tabIndex === 2
                      ? "2px solid #00A787"
                      : "2px solid transparent",
                }}
                label="Shipping"
              />
              <Tab
                style={{
                  fontSize: "13px",
                  color: tabIndex === 3 ? "#00A787" : "inherit",
                  borderBottom:
                    tabIndex === 3
                      ? "2px solid #00A787"
                      : "2px solid transparent",
                }}
                label="Pricing"
              />
              <Tab
                style={{
                  fontSize: "13px",
                  color: tabIndex === 4 ? "#00A787" : "inherit",
                  borderBottom:
                    tabIndex === 4
                      ? "2px solid #00A787"
                      : "2px solid transparent",
                }}
                label="SEO"
              />
              <Tab
                style={{
                  fontSize: "13px",
                  color: tabIndex === 5 ? "#00A787" : "inherit",
                  borderBottom:
                    tabIndex === 5
                      ? "2px solid #00A787"
                      : "2px solid transparent",
                }}
                label="Options"
              />
            </Tabs>
          </>
        )}
      </Box>

      {combination === "true" ? (
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Box component="form" onSubmit={handleSubmit(submitHandler)}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          mt: -1,
                        }}
                      >
                        Enter Your Product Name
                      </Typography>

                      <TextField
                        size="small"
                        sx={{
                          width: "75%",
                          mt: 1,
                          height: "0.5rem",
                        }}
                        id="margin-normal"
                        margin="normal"
                        {...register("prodname", { required: true })}
                        error={errors.prodname}
                        // onChange={handleChange.bind(this)}
                        InputProps={{
                          style: { fontSize: 13 },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        border: "2px solid gray",
                        width: "75%",
                        // height: "250px",
                        mt: "50px",
                        overflow: "scroll",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              flexDirection: "column",
                              alignItems: "center",
                              margin: "0px 10%",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography variant="h6" sx={{ fontSize: 12 }}>
                              {" "}
                              Add Images up to 10
                            </Typography>
                            <TextField
                              size="small"
                              sx={{
                                margin: "0px 0px",
                                border: "none",
                              }}
                              inputProps={{
                                style: { fontSize: 12 },
                                multiple: true,
                                accept: "image/*",
                              }}
                              fullWidth
                              type="file"
                              name="uploadedImages"
                              multiple
                              onChange={onSelectFile}
                            />
                            <br />
                          </Box>
                        </Grid>
                        <Grid item xs>
                          {ImageDelete === "Delete" ? (
                            <></>
                          ) : (
                            <>
                              {ImageSelectblob === ImageSelectblob && (
                                <Box
                                  sx={{
                                    display: "flex",
                                    width: "100%",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    margin: "0px 10%",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <Box sx={{ display: "flex" }}>
                                    <IconButton
                                      onClick={() =>
                                        deleteHandlerpage(ImageSelect)
                                      }
                                    >
                                      <ClearIcon
                                        sx={{
                                          backgroundColor: "#999999",
                                          color: "#fff",
                                        }}
                                      />
                                    </IconButton>
                                    <FormControlLabel
                                      sx={{ fontSize: 12 }}
                                      label={
                                        <Typography
                                          sx={{ fontSize: 12, mr: 3 }}
                                        >
                                          Select Image
                                        </Typography>
                                      }
                                      control={
                                        <Checkbox
                                          style={{
                                            color: checked
                                              ? "#00A787"
                                              : "inherit",
                                          }}
                                          size="small"
                                          onChange={handleChangeChekce}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                      }
                                    />
                                  </Box>

                                  <Button
                                    sx={{
                                      // mr: 3,
                                      // mt: 5,
                                      borderRadius: "50px",
                                      backgroundColor: "#00A787",
                                      "&:hover": {
                                        backgroundColor: "#00A787",
                                      },
                                      fontSize: 10,
                                    }}
                                    variant="contained"
                                    size="small"
                                    onClick={handleChangeSaveImage}
                                  >
                                    Select cover Image
                                  </Button>
                                </Box>
                              )}
                            </>
                          )}
                        </Grid>
                      </Grid>
                      <List>
                        {/* <input type="file" multiple /> */}
                        {selectedImages?.length > 0 &&
                          selectedImages?.length > 10 && (
                            <p className="error">
                              You upload more than 10 images! <br />
                              <span>
                                please delete{" "}
                                <b> {selectedImages?.length - 10} </b> of them{" "}
                              </span>
                            </p>
                          )}
                        <Box
                          sx={{
                            width: "auto",
                            listStyle: "none",
                            display: "flex",
                            flexFlow: "wrap row",
                            flexDirection: "row",
                            alignItems: "center",
                            m: 2,
                          }}
                        >
                          <ListItem>
                            {selectedImages?.map((image, index) => {
                              return (
                                <Box key={image} className="image" width="75%">
                                  {image === CoverImages ? (
                                    <CardContent
                                      sx={{
                                        mt: -4,
                                        width: "100%",
                                        ml: 1,
                                      }}
                                    >
                                      <Typography
                                        variant="body2"
                                        color="#fff"
                                        sx={{
                                          fontSize: 10,
                                          height: 10,
                                          width: 65,
                                          padding: 0,
                                          Zindex: -1,
                                          mt: -1,
                                          ml: -2,
                                          color: "black",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Cover Image
                                      </Typography>
                                    </CardContent>
                                  ) : (
                                    <></>
                                  )}
                                  <CardMedia
                                    sx={{
                                      padding: 0,
                                      margin: 1,
                                      border:
                                        image === ImageSelectblob
                                          ? "2px solid #66CCFF"
                                          : "2px solid #999999",
                                      height: 100,
                                      width: 100,
                                    }}
                                    className="media"
                                    component="img"
                                    height="50"
                                    image={image}
                                    alt={name}
                                    id={index}
                                    onClick={(e) => ImagHandleSelect(e, index)}
                                  />

                                  <Button
                                    sx={{ color: "#00A787" }}
                                    onClick={() => deleteHandler(image)}
                                  >
                                    Remove
                                    {/* <ClearIcon
                                        sx={{ backgroundColor: "red" }}
                                      /> */}
                                  </Button>
                                </Box>
                              );
                            })}
                          </ListItem>
                        </Box>
                      </List>
                    </Box>

                    <Typography
                      sx={{
                        mt: "5px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Summary
                    </Typography>

                    <Box sx={{ mt: "10px", width: "75%" }}>
                      <CKEditor
                        editor={ClassicEditor}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setSummary({ data });
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Description
                    </Typography>

                    <Box sx={{ mt: "10px", width: "75%" }}>
                      <CKEditor
                        editor={ClassicEditor}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setDescription({ data });
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Features
                    </Typography>

                    <Typography>
                      <Button
                        sx={{
                          mr: 3,
                          mt: 1,
                          borderRadius: "70px",
                          backgroundColor: "#00A787",
                          "&:hover": { backgroundColor: "#00A787" },
                          color: "#fff",
                          fontSize: "12px",
                        }}
                        variant="contained"
                        small
                        onClick={handleappend}
                      >
                        Add a feature
                      </Button>
                    </Typography>
                    <>
                      {fields ? (
                        <>
                          {fields?.map(({ id }, index) => {
                            return (
                              <Box key={id} sx={{ p: 2, m: 2, width: "75%" }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    mt: "20px",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Typography sx={{ fontSize: "12px" }}>
                                    Feature
                                  </Typography>
                                  <Typography sx={{ fontSize: "12px" }}>
                                    Predefined value
                                  </Typography>
                                  <Typography sx={{ fontSize: "12px" }}>
                                    OR Customized value
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    mt: "20px",
                                    justifyContent: "space-between",
                                    fontSize: 12,
                                  }}
                                >
                                  <FormControl sx={{ width: "30%" }}>
                                    <Select
                                      native
                                      size="small"
                                      // Featuresvaluedetails
                                      name={index}
                                      id={index}
                                      // defaultValue={featurestype}
                                      ref={register()}
                                      onChange={(e) => HandleChange(e, index)}
                                    >
                                      <option value="">
                                        Select your Future
                                      </option>
                                      {Featuresdetails?.map((Feature) => (
                                        <option
                                          key={Feature._id}
                                          value={Feature._id}
                                        >
                                          {Feature.featurename}
                                        </option>
                                      ))}
                                    </Select>
                                  </FormControl>
                                  <FormControl sx={{ width: "30%" }}>
                                    <Select
                                      size="small"
                                      native
                                      // defaultValue={featurestypevalue}
                                      name={index}
                                      id={index}
                                      ref={register()}
                                      onChange={(e) =>
                                        handleFeatureValue(e, index)
                                      }
                                      // onClick={() => removeName(index)}
                                    >
                                      {Featuresvaluedetails?.filter(
                                        (Feature) => {
                                          return (
                                            // Feature.featuretype=== featurestype[newadd]?.id && index===featurestype[newadd]?.index
                                            Feature.featuretype ===
                                            featurestype[index]?.id
                                          );
                                        },
                                      )?.map((Feature) => (
                                        <option
                                          key={Feature._id}
                                          value={Feature._id}
                                        >
                                          {Feature.featurevalue}
                                        </option>
                                      ))}
                                    </Select>
                                  </FormControl>

                                  <TextField
                                    name={`items[${index}].name`}
                                    ref={register()}
                                    id="outlined-size-small"
                                    size="small"
                                  />
                                  <IconButton
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    <ClearIcon sx={{ color: "red" }} />
                                  </IconButton>
                                </Box>
                              </Box>
                            );
                          })}
                        </>
                      ) : (
                        <></>
                      )}
                    </>

                    <Typography>
                      <Button
                        sx={{
                          mr: 3,
                          mt: 1,
                          borderRadius: "70px",
                          backgroundColor: "#00A787",
                          "&:hover": { backgroundColor: "#00A787" },
                          color: "#fff",
                          fontSize: "12px",
                        }}
                        variant="contained"
                        onClick={() => setBrand(1)}
                      >
                        Add a brand
                      </Button>
                    </Typography>

                    <>
                      {brand === 1 ? (
                        <>
                          <Box sx={{ p: 1, m: 1 }}>
                            <Box
                              sx={{
                                display: "flex",
                                mt: "10px",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "20px",
                                  fontWeight: "700",
                                }}
                              >
                                Brand
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                mt: "20px",
                                justifyContent: "space-between",
                              }}
                            >
                              <FormControl sx={{ width: "40%" }}>
                                <Select
                                  value={brandId}
                                  onChange={(e) => setBrandId(e.target.value)}
                                >
                                  {brandLists?.map((item, index) => (
                                    <MenuItem key={index} value={item._id}>
                                      {item.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                        </>
                      ) : (
                        <></>
                      )}
                    </>

                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Related Product
                    </Typography>

                    <>
                      {relatProd === 1 ? (
                        <Typography sx={{ m: 2 }}>
                          <TextField
                            size="small"
                            sx={{ width: "60%" }}
                            id="standard-bare"
                            variant="outlined"
                            {...register("search", { required: true })}
                            error={errors.search}
                            InputProps={{
                              endAdornment: (
                                <IconButton>
                                  <SearchOutlined />
                                </IconButton>
                              ),
                            }}
                          />
                        </Typography>
                      ) : (
                        <>
                          <Typography>
                            <Button
                              sx={{
                                mr: 3,
                                mt: 1,
                                borderRadius: "70px",
                                backgroundColor: "#00A787",
                                "&:hover": {
                                  backgroundColor: "#00A787",
                                },
                                color: "#fff",
                                fontSize: "12px",
                              }}
                              variant="contained"
                              onClick={() => setRelatProduct(1)}
                            >
                              Add a related product
                            </Button>
                          </Typography>
                        </>
                      )}
                    </>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      mt: "-10px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      ml: -15,
                    }}
                  >
                    Combinations
                    <Tooltip title={Combinations}>
                      <InfoIcon sx={{ fontSize: 12 }} />
                    </Tooltip>
                  </Typography>

                  <Box>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={combination}
                        onChange={handleChangecombination}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            ml: "-7.5rem",
                            width: "200%",
                          }}
                        >
                          <Box
                            sx={{
                              fontsize: "12px",
                              width: "300%",
                            }}
                          >
                            <FormControlLabel
                              value="Simple Product"
                              control={
                                <Radio
                                  size="small"
                                  style={{ color: "#00A787" }}
                                />
                              }
                              label={
                                <Typography sx={{ fontSize: 14 }}>
                                  Simple Product
                                </Typography>
                              }
                            />
                          </Box>

                          <Box
                            sx={{
                              fontsize: "12px",
                              // mr: "110px",
                              width: "600%",
                            }}
                          >
                            <FormControlLabel
                              value={true}
                              control={
                                <Radio
                                  style={{ mt: -1, color: "#00A787" }}
                                  size="small"
                                />
                              }
                              // label='Product with combinations'
                              label={
                                <Typography sx={{ fontSize: 14 }}>
                                  Product with combinations
                                </Typography>
                              }
                            />
                          </Box>
                        </Box>
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        ml: -15,
                      }}
                    >
                      Reference
                      <Tooltip title={reference}>
                        <InfoIcon sx={{ fontSize: 12 }} />
                      </Tooltip>
                    </Typography>
                    <Typography
                      sx={{
                        ml: "10rem",
                        fontSize: "14px",
                        fontWeight: "bold",

                        mt: "10px",
                      }}
                    >
                      Quantity
                      <Tooltip>
                        <InfoIcon sx={{ fontSize: 12 }} />
                      </Tooltip>
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item xs={4}>
                      <Box>
                        <Typography>
                          <TextField
                            size="small"
                            sx={{
                              mt: "10px",
                              fontSize: "12px",
                              fontWeight: "bold",
                              ml: -15,
                            }}
                            width="20%"
                            id="margin-normal"
                            margin="normal"
                            value={referenced}
                            onChange={handlereference}
                            // {...register("reference", {
                            //   required: true,
                            // })}
                            InputProps={{
                              style: { fontSize: 13 },
                            }}
                          />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <Box>
                        <Typography>
                          <TextField
                            sx={{ m: 1 }}
                            size="small"
                            width="50%"
                            // label="0"
                            id="margin-normal"
                            margin="normal"
                            {...register("quantity", {
                              // required: true,
                            })}
                            inputProps={{ readOnly: true }}
                          />
                        </Typography>
                      </Box>
                    </Grid>
                  </Box>

                  <Typography
                    sx={{
                      mt: "10px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      ml: -15,
                    }}
                  >
                    Price
                    <Tooltip title={price}>
                      <InfoIcon sx={{ fontSize: 12 }} />
                    </Tooltip>
                  </Typography>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        mt: "10px",
                        ml: -15,
                      }}
                    >
                      <TextField
                        size="small"
                        label="Tax excluded"
                        id="outlined-start-adornment"
                        value={Prodexclusive}
                        onChange={handleProdexclusive}
                        // {...register("taxexcluded", { required: true })}
                        sx={{ m: 1, width: "100%" }}
                        inputProps={{ readOnly: true }}
                        InputProps={{
                          style: { fontSize: 13 },
                          startAdornment: (
                            <InputAdornment position="start">
                              <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormControl sx={{ width: "100%", mt: 0.7 }} size="small">
                        <InputLabel id="demo-select-small-label">
                          Tax Rule
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          size="small"
                          label="Tax Rule"
                          value={Taxprice}
                          onChange={taxesrule}
                          inputProps={{ readOnly: true }}
                        >
                          {taxes?.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={item._id}
                              onClick={() => setpercentage(item._id)}
                            >
                              {item.Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <TextField
                        size="small"
                        label="Tax included"
                        // {...register("taxincluded", { required: true })}
                        value={Prodinclusive}
                        onChange={(e) => setProdinclusive(e.target.value)}
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "100%" }}
                        inputProps={{ readOnly: true }}
                        InputProps={{
                          style: { fontSize: 13 },
                          startAdornment: (
                            <InputAdornment position="start">
                              <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        ml: -15,
                      }}
                    >
                      categories
                      <Tooltip title={categories}>
                        <InfoIcon sx={{ fontSize: 12 }} />
                      </Tooltip>
                    </Typography>

                    <TreeView
                      aria-label="rich object"
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpanded={["root"]}
                      defaultExpandIcon={<ChevronRightIcon />}
                      // onChange={(nodeId) => setParent(nodeId)}
                      onNodeSelect={handleSelectedItems}
                      sx={{
                        border: "1px solid black",
                        p: 1,

                        ".MuiTreeItem-root": {
                          ".Mui-focused:not(.Mui-selected)": classes.focused,
                          ".Mui-selected, .Mui-focused.Mui-selected, .Mui-selected:hover":
                            classes.selected,
                        },
                      }}
                    >
                      {/* {categorymasterallList?.map((item) =>
                                renderTree(item), */}
                      {categorymasterallList?.map((item) => (
                        <>
                          <TreeItem
                            key={item._id}
                            nodeId={item._id}
                            label={
                              parentId === item._id ? (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      size="small"
                                      style={{
                                        mt: -1,
                                        color: "#00A787",
                                      }}
                                      name="file"
                                      checked={checkedtree}
                                    />
                                  }
                                  label={
                                    <Typography sx={{ fontSize: 12 }}>
                                      {item.name}
                                    </Typography>
                                  }
                                  key={item._id}
                                />
                              ) : (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      size="small"
                                      name="file"
                                      style={{
                                        mt: -1,
                                        color: "#00A787",
                                      }}
                                    />
                                  }
                                  label={
                                    <Typography sx={{ fontSize: 12 }}>
                                      {item.name}
                                    </Typography>
                                  }
                                  key={item._id}
                                />
                              )
                            }
                          >
                            {item.children
                              ?.filter((childItem) => {
                                return childItem.parent === item._id;
                              })
                              ?.map((childItem) => (
                                <>
                                  <TreeItem
                                    key={item._id}
                                    nodeId={
                                      `${item._id}` + "-" + `${childItem._id}`
                                    }
                                    label={
                                      childId === childItem._id ? (
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              style={{
                                                mt: -1,
                                                color: "#00A787",
                                              }}
                                              size="small"
                                              name="file"
                                              checked={checkedtree}
                                            />
                                          }
                                          label={
                                            <Typography sx={{ fontSize: 12 }}>
                                              {childItem.name}
                                            </Typography>
                                          }
                                          key={childItem._id}
                                        />
                                      ) : (
                                        <FormControlLabel
                                          sx={{ fontSize: "12px" }}
                                          control={
                                            <Checkbox
                                              style={{
                                                mt: -1,
                                                color: "#00A787",
                                              }}
                                              size="small"
                                              name="file"
                                            />
                                          }
                                          label={
                                            <Typography sx={{ fontSize: 12 }}>
                                              {childItem.name}
                                            </Typography>
                                          }
                                          key={childItem._id}
                                        />
                                      )
                                    }
                                  >
                                    {childItem.children
                                      ?.filter((grandItem) => {
                                        return (
                                          grandItem.parent === childItem._id
                                        );
                                      })
                                      ?.map((grandItem) => (
                                        <>
                                          <TreeItem
                                            key={item._id}
                                            nodeId={
                                              `${item._id}` +
                                              "-" +
                                              `${childItem._id}` +
                                              "-" +
                                              `${grandItem._id}`
                                            }
                                            label={
                                              grandchildId === grandItem._id ? (
                                                <FormControlLabel
                                                  sx={{
                                                    fontSize: "12px",
                                                  }}
                                                  control={
                                                    <Checkbox
                                                      style={{
                                                        mt: -1,
                                                        color: "#00A787",
                                                      }}
                                                      size="small"
                                                      name="file"
                                                      checked={checkedtree}
                                                      // onChange={handleChange}
                                                    />
                                                  }
                                                  label={
                                                    <Typography
                                                      sx={{
                                                        fontSize: 12,
                                                      }}
                                                    >
                                                      {grandItem.name}
                                                    </Typography>
                                                  }
                                                  key={grandItem._id}
                                                />
                                              ) : (
                                                <FormControlLabel
                                                  sx={{
                                                    fontSize: "12px",
                                                  }}
                                                  control={
                                                    <Checkbox
                                                      style={{
                                                        mt: -1,
                                                        color: "#00A787",
                                                      }}
                                                      size="small"
                                                      name="file"
                                                      // onChange={handleChange}
                                                    />
                                                  }
                                                  label={
                                                    <Typography
                                                      sx={{
                                                        fontSize: 12,
                                                      }}
                                                    >
                                                      {grandItem.name}
                                                    </Typography>
                                                  }
                                                  key={grandItem._id}
                                                />
                                              )
                                            }
                                          ></TreeItem>
                                        </>
                                      ))}
                                  </TreeItem>
                                </>
                              ))}
                          </TreeItem>
                        </>
                      ))}
                    </TreeView>
                  </Grid>
                  <Typography
                    sx={{
                      mt: "10px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      ml: -15,
                    }}
                  >
                    Create a new category
                    <Tooltip title={newcategories}>
                      <InfoIcon sx={{ fontSize: 12 }} />
                    </Tooltip>
                  </Typography>

                  {category === 1 ? (
                    <>
                      <Box sx={{ m: 2, p: 1 }}>
                        <Typography>New Category name</Typography>

                        <Typography sx={{ mt: "20px" }}>
                          <TextField
                            id="outlined-size-small"
                            defaultValue="Category name"
                            size="small"
                            InputProps={{
                              style: { fontSize: 13 },
                            }}
                          />
                        </Typography>

                        <Typography sx={{ mt: "20px" }}>
                          Parent of the category
                        </Typography>

                        <Typography sx={{ mt: "20px" }}>
                          <TextField
                            id="outlined-size-small"
                            defaultValue="Home"
                            size="small"
                            InputProps={{
                              style: { fontSize: 13 },
                            }}
                          />
                        </Typography>

                        <Typography sx={{ mt: "10px" }}>
                          <Button variant="contained">Cancel</Button>
                          <Button variant="contained" sx={{ ml: "50px" }}>
                            Create
                          </Button>
                        </Typography>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Typography>
                        <Button
                          sx={{
                            mr: 3,
                            mt: 1,
                            borderRadius: "70px",
                            backgroundColor: "#00A787",
                            "&:hover": { backgroundColor: "#00A787" },
                            color: "#fff",
                            fontSize: "12px",
                            ml: -15,
                          }}
                          variant="contained"
                          onClick={() => setCategory(1)}
                        >
                          Create a Category
                        </Button>
                      </Typography>

                      <Typography>
                        <Button
                          type="submit"
                          sx={{
                            mr: 1,
                            mt: 5,
                            borderRadius: "70px",
                            backgroundColor: "#00A787",
                            "&:hover": { backgroundColor: "#00A787" },
                            color: "#fff",
                            ml: "15rem",
                          }}
                          variant="contained"
                        >
                          Save
                        </Button>
                      </Typography>
                    </>
                  )}
                </Grid>
              </Grid>
            </Box>
          )}
          {/* *****************************Save Screen********************************************* */}

          {tabIndex === 1 && (
            <Grid container>
              <Grid item xs>
                {gridComopen === 1 ? (
                  <Box style={{ height: 560, width: "100%" }}>
                    <DataGrid
                      sx={{
                        boxShadow: 10,
                        borderRadius: 0,
                        m: 2,
                      }}
                      columns={combinationcolumns}
                      rows={ComList ? ComList : ""}
                      getRowId={(rows) => rows.id}
                      VerticalAlignment="Center"
                      rowHeight={64}
                      pageSize={10}
                      rowsPerPageOptions={[10]}
                      // checkboxSelection
                    />
                    <Box>
                      <Dialog
                        // fullWidth={fullWidth}
                        // maxWidth={maxWidth}
                        open={Comopen}
                        onClick={handleComClose}
                        sx={{
                          width: 700,
                          hight: 700,
                        }}
                      >
                        <Box>
                          <CardMedia
                            sx={{
                              cursor: "pointer",
                              justifycontent: "space-between",
                            }}
                            component="img"
                            // height="200"
                            image={ComnewImg}
                            // alt={"subimgnew.filename"}
                            // onMouseOver={handleChangeimage}
                          />
                        </Box>
                      </Dialog>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: "#00A787",
                        "&:hover": {
                          backgroundColor: "#00A787",
                        },
                      }}
                      onClick={(event) => HandlecombSave(event)}
                      type="Click"
                    >
                      Save
                    </Button>
                  </Box>
                ) : (
                  <>
                    {subtype?.length > 0 ? (
                      <Grid container item xs>
                        <Grid xs={6}>
                          <Box
                            sx={{ width: "100%" }}
                            component="form"
                            onSubmit={handleSubmit1(CreateCombination)}
                          >
                            <Autocomplete
                              size="small"
                              multiple={true}
                              id="free-solo-demo"
                              options={attributeValuedetails}
                              value={defaultOption}
                              autoSelect={true}
                              getOptionLabel={(option) =>
                                `${option.attributename} : ${option.value} `
                              }
                              onChange={(event, value) =>
                                combinationhandleChange(event, value)
                              }
                              filterOptions={filterOptions}
                              renderInput={(params) => (
                                <TextField
                                  InputProps={{
                                    style: { fontSize: 13 },
                                  }}
                                  size="small"
                                  {...params}
                                  label="Combination"
                                  margin="normal"
                                  variant="outlined"
                                />
                              )}
                            />
                            <Button
                              variant="contained"
                              sx={{
                                mt: 3,
                                mr: 20,
                                backgroundColor: "#00A787",
                                "&:hover": { backgroundColor: "#00A787" },
                              }}
                              type="submit"
                            >
                              Generate
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid container>
                        <Grid item xs={6}>
                          <Box
                            sx={{ width: "100%" }}
                            component="form"
                            onSubmit={handleSubmit1(CreateCombination)}
                          >
                            <Autocomplete
                              size="small"
                              multiple={true}
                              id="free-solo-demo"
                              options={attributeValuedetails}
                              value={combValues}
                              autoSelect={true}
                              getOptionLabel={(option) =>
                                `${option.attributename} : ${option.value} `
                              }
                              onChange={(event, value) =>
                                combinationhandleChange(event, value)
                              }
                              filterOptions={filterOptions}
                              renderInput={(params) => (
                                <TextField
                                  InputProps={{
                                    style: { fontSize: 13 },
                                  }}
                                  size="small"
                                  {...params}
                                  label="Combination"
                                  margin="normal"
                                  variant="outlined"
                                />
                              )}
                            />
                          </Box>
                        </Grid>
                        <Grid xs={6}>
                          <Grid items xs={3}></Grid>
                          <Grid items xs={6}>
                            <Box
                              sx={{
                                marginTop: "10px",
                                marginLeft: "30px",
                                marginBottom: "20px",
                              }}
                            >
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  Select RAM
                                </AccordionSummary>
                                {ramData.map((option) => (
                                  <>
                                    <AccordionDetails sx={{ width: "50%" }}>
                                      <>
                                        <FormControlLabel
                                          sx={{ display: "flex" }}
                                          key={option.id}
                                          control={
                                            <Checkbox
                                              sx={{ display: "flex" }}
                                              checked={option.checked}
                                              onChange={() =>
                                                handleCheckboxRamChange(
                                                  option.value,
                                                  event,
                                                )
                                              }
                                            />
                                          }
                                          label={option.value}
                                        />
                                      </>
                                    </AccordionDetails>
                                  </>
                                ))}
                              </Accordion>
                            </Box>
                            <Box
                              style={{
                                marginLeft: "30px",
                                marginBottom: "20px",
                              }}
                            >
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography>Select Size</Typography>
                                </AccordionSummary>
                                {sizeData.map((option) => (
                                  <>
                                    <AccordionDetails sx={{ width: "50%" }}>
                                      <>
                                        <FormControlLabel
                                          sx={{ display: "flex" }}
                                          key={option.id}
                                          control={
                                            <Checkbox
                                              sx={{ display: "flex" }}
                                              checked={option.checked}
                                              onChange={() =>
                                                handleCheckboxSizeChange(
                                                  option.value,
                                                  event,
                                                )
                                              }
                                            />
                                          }
                                          label={option.value}
                                        />
                                      </>
                                    </AccordionDetails>
                                  </>
                                ))}
                              </Accordion>
                            </Box>
                            <Box
                              style={{
                                marginLeft: "30px",
                                marginBottom: "20px",
                              }}
                            >
                              <Accordion>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <Typography>Select Color</Typography>
                                </AccordionSummary>
                                {colorData.map((option) => (
                                  <>
                                    {/* {checkboxes.map((checkbox) => ( */}
                                    <>
                                      <AccordionDetails sx={{ width: "50%" }}>
                                        <>
                                          <FormControlLabel
                                            sx={{ display: "flex" }}
                                            key={option.id}
                                            control={
                                              <Checkbox
                                                sx={{ display: "flex" }}
                                                checked={option.checked}
                                                onChange={() =>
                                                  handleCheckboxColorChange(
                                                    option.value,
                                                    event,
                                                  )
                                                }
                                              />
                                            }
                                            label={option.value}
                                          />

                                          {/* <div key={option.id}>
                                                    <label>
                                                      <input
                                                        type="checkbox"
                                                        checked={option.checked}
                                                        onChange={() => handleCheckboxChange(option.id)}
                                                      />
                                                      {option.value}
                                                    </label>
                                                  </div>

                                                  <p>Selected checkboxes: {checkboxes.filter((c) => c.checked).length}</p> */}
                                        </>
                                      </AccordionDetails>
                                    </>
                                    {/* ))} */}
                                  </>
                                ))}
                              </Accordion>
                            </Box>
                          </Grid>
                          <Grid items xs={3}></Grid>
                          <Box></Box>
                        </Grid>
                        <Button
                          variant="contained"
                          sx={{
                            mt: 3,
                            mr: 20,
                            backgroundColor: "#00A787",
                            "&:hover": { backgroundColor: "#00A787" },
                          }}
                          type="submit"
                        >
                          Generate
                        </Button>
                      </Grid>
                    )}
                  </>
                )}
              </Grid>
            </Grid>
          )}

          {/* ************************************************************************* */}
          {tabIndex === 2 && <ProductQuantitiesSreen />}
          {tabIndex === 3 && <ProductShippingScreen />}
          {tabIndex === 4 && <ProdPricingScreen />}
          {tabIndex === 5 && <SeoScreen />}
          {tabIndex === 6 && <OptionsScreen />}
        </Box>
      ) : (
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Box component="form" onSubmit={handleSubmit(submitHandler)}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Box>
                    <Box sx={{ width: "100%" }}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          mt: -1,
                        }}
                      >
                        Enter Your Product Name
                      </Typography>

                      <TextField
                        size="small"
                        sx={{
                          width: "75%",
                          mt: 1,
                          height: "0.5rem",
                        }}
                        id="margin-normal"
                        margin="normal"
                        {...register("prodname", { required: true })}
                        error={errors.prodname}
                        // onChange={handleChange.bind(this)}
                        InputProps={{
                          style: { fontSize: 13 },
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        border: "2px solid gray",
                        width: "75%",
                        // height: "250px",
                        mt: "50px",
                        overflow: "scroll",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              flexDirection: "column",
                              alignItems: "center",
                              margin: "0px 10%",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography variant="h6" sx={{ fontSize: 12 }}>
                              {" "}
                              Add Images up to 10
                            </Typography>
                            <TextField
                              size="small"
                              sx={{
                                margin: "0px 0px",
                                border: "none",
                              }}
                              inputProps={{
                                style: { fontSize: 12 },
                                multiple: true,
                                accept: "image/*",
                              }}
                              fullWidth
                              type="file"
                              name="uploadedImages"
                              multiple
                              onChange={onSelectFile}
                            />
                            <br />
                          </Box>
                        </Grid>
                        <Grid item xs>
                          {ImageDelete === "Delete" ? (
                            <></>
                          ) : (
                            <>
                              {ImageSelectblob === ImageSelectblob && (
                                <Box
                                  sx={{
                                    display: "flex",
                                    width: "100%",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    margin: "0px 10%",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <Box sx={{ display: "flex" }}>
                                    <IconButton
                                      onClick={() =>
                                        deleteHandlerpage(ImageSelect)
                                      }
                                    >
                                      <ClearIcon
                                        sx={{
                                          backgroundColor: "#999999",
                                          color: "#fff",
                                        }}
                                      />
                                    </IconButton>
                                    <FormControlLabel
                                      sx={{ fontSize: 12 }}
                                      label={
                                        <Typography
                                          sx={{ fontSize: 12, mr: 3 }}
                                        >
                                          Select Image
                                        </Typography>
                                      }
                                      control={
                                        <Checkbox
                                          style={{ color: "#00A787" }}
                                          size="small"
                                          checked={checked}
                                          onChange={handleChangeChekce}
                                          inputProps={{
                                            "aria-label": "controlled",
                                          }}
                                        />
                                      }
                                    />
                                  </Box>

                                  <Button
                                    sx={{
                                      // mr: 3,
                                      // mt: 5,
                                      borderRadius: "50px",
                                      backgroundColor: "#00A787",
                                      "&:hover": {
                                        backgroundColor: "#00A787",
                                      },
                                      fontSize: 10,
                                    }}
                                    variant="contained"
                                    size="small"
                                    onClick={handleChangeSaveImage}
                                  >
                                    Select cover Image
                                  </Button>
                                </Box>
                              )}
                            </>
                          )}
                        </Grid>
                      </Grid>
                      <List>
                        {/* <input type="file" multiple /> */}
                        {selectedImages?.length > 0 &&
                          selectedImages?.length > 10 && (
                            <p className="error">
                              You upload more than 10 images! <br />
                              <span>
                                please delete{" "}
                                <b> {selectedImages?.length - 10} </b> of them{" "}
                              </span>
                            </p>
                          )}
                        <Box
                          sx={{
                            width: "auto",
                            listStyle: "none",
                            display: "flex",
                            flexFlow: "wrap row",
                            flexDirection: "row",
                            alignItems: "center",
                            m: 2,
                          }}
                        >
                          <ListItem>
                            {selectedImages?.map((image, index) => {
                              return (
                                <Box key={image} className="image" width="75%">
                                  {image === CoverImages ? (
                                    <CardContent
                                      sx={{
                                        mt: -4,
                                        width: "100%",
                                        ml: 1,
                                      }}
                                    >
                                      <Typography
                                        variant="body2"
                                        color="#fff"
                                        sx={{
                                          fontSize: 10,
                                          height: 10,
                                          width: 70,
                                          padding: 0,
                                          Zindex: -1,
                                          mt: -1,
                                          ml: -2,
                                          color: "black",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Cover Image
                                      </Typography>
                                    </CardContent>
                                  ) : (
                                    <></>
                                  )}
                                  <CardMedia
                                    sx={{
                                      padding: 0,
                                      marginLeft: 1,
                                      mb: 1,
                                      border:
                                        image === ImageSelectblob
                                          ? "2px solid #66CCFF"
                                          : "2px solid #999999",
                                      height: 80,
                                      width: 80,
                                    }}
                                    className="media"
                                    component="img"
                                    height="50"
                                    image={image}
                                    alt={name}
                                    id={index}
                                    onClick={(e) => ImagHandleSelect(e, index)}
                                  />

                                  <Button
                                    sx={{ color: "#00A787" }}
                                    onClick={() => deleteHandler(image)}
                                  >
                                    Remove
                                    {/* <ClearIcon
                                        sx={{ backgroundColor: "red" }}
                                      /> */}
                                  </Button>
                                </Box>
                              );
                            })}
                          </ListItem>
                        </Box>
                      </List>
                    </Box>

                    <Typography
                      sx={{
                        mt: "5px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Summary
                    </Typography>

                    <Box sx={{ mt: "10px", width: "75%" }}>
                      <CKEditor
                        editor={ClassicEditor}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setSummary({ data });
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Description
                    </Typography>

                    <Box sx={{ mt: "10px", width: "75%" }}>
                      <CKEditor
                        editor={ClassicEditor}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setDescription({ data });
                        }}
                      />
                    </Box>

                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Features
                    </Typography>

                    <Typography>
                      <Button
                        sx={{
                          mr: 3,
                          mt: 1,
                          borderRadius: "70px",
                          backgroundColor: "#00A787",
                          "&:hover": { backgroundColor: "#00A787" },
                          color: "#fff",
                          fontSize: "12px",
                        }}
                        variant="contained"
                        small
                        onClick={handleappend}
                      >
                        Add a feature
                      </Button>
                    </Typography>
                    <>
                      {/* ***********SAVE SCREEN************** */}
                      {fields ? (
                        <>
                          {fields?.map(({ id }, index) => {
                            return (
                              <Box key={id} sx={{ p: 2, m: 2, width: "75%" }}>
                                <Box
                                  sx={{
                                    display: "flex",
                                    mt: "20px",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <Typography sx={{ fontSize: "12px" }}>
                                    Feature
                                  </Typography>
                                  <Typography sx={{ fontSize: "12px" }}>
                                    Predefined value
                                  </Typography>
                                  <Typography sx={{ fontSize: "12px" }}>
                                    OR Customized value
                                  </Typography>
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    mt: "20px",
                                    justifyContent: "space-between",
                                    fontSize: 12,
                                  }}
                                >
                                  <FormControl sx={{ width: "30%" }}>
                                    <Select
                                      native
                                      size="small"
                                      // Featuresvaluedetails
                                      name={index}
                                      id={index}
                                      // defaultValue={featurestype}
                                      ref={register()}
                                      onChange={(e) => HandleChange(e, index)}
                                    >
                                      <option value="">
                                        Select your Future
                                      </option>
                                      {Featuresdetails?.map((Feature) => (
                                        <option
                                          key={Feature._id}
                                          value={Feature._id}
                                        >
                                          {Feature.featurename}
                                        </option>
                                      ))}
                                    </Select>
                                  </FormControl>
                                  <FormControl sx={{ width: "30%" }}>
                                    <Select
                                      size="small"
                                      native
                                      // defaultValue={featurestypevalue}
                                      name={index}
                                      id={index}
                                      ref={register()}
                                      onChange={(e) =>
                                        handleFeatureValue(e, index)
                                      }
                                      // onClick={() => removeName(index)}
                                    >
                                      {Featuresvaluedetails?.filter(
                                        (Feature) => {
                                          return (
                                            // Feature.featuretype=== featurestype[newadd]?.id && index===featurestype[newadd]?.index
                                            Feature.featuretype ===
                                            featurestype[index]?.id
                                          );
                                        },
                                      )?.map((Feature) => (
                                        <option
                                          key={Feature._id}
                                          value={Feature._id}
                                        >
                                          {Feature.featurevalue}
                                        </option>
                                      ))}
                                    </Select>
                                  </FormControl>

                                  <TextField
                                    name={`items[${index}].name`}
                                    ref={register()}
                                    id="outlined-size-small"
                                    size="small"
                                  />
                                  <IconButton
                                    type="button"
                                    onClick={() => remove(index)}
                                  >
                                    <ClearIcon sx={{ color: "red" }} />
                                  </IconButton>
                                </Box>
                              </Box>
                            );
                          })}
                        </>
                      ) : (
                        <></>
                      )}
                    </>

                    <Typography>
                      <Button
                        sx={{
                          mr: 3,
                          mt: 1,
                          borderRadius: "70px",
                          backgroundColor: "#00A787",
                          "&:hover": { backgroundColor: "#00A787" },
                          color: "#fff",
                          fontSize: "12px",
                        }}
                        variant="contained"
                        onClick={() => setBrand(1)}
                      >
                        Add a brand
                      </Button>
                    </Typography>

                    <>
                      {brand === 1 ? (
                        <>
                          <Box sx={{ p: 1, m: 1 }}>
                            <Box
                              sx={{
                                display: "flex",
                                mt: "10px",
                                justifyContent: "space-between",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "20px",
                                  fontWeight: "700",
                                }}
                              >
                                Brand
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                mt: "20px",
                                justifyContent: "space-between",
                              }}
                            >
                              <FormControl sx={{ width: "40%" }}>
                                <Select
                                  value={brandId}
                                  onChange={(e) => setBrandId(e.target.value)}
                                >
                                  {brandLists?.map((item, index) => (
                                    <MenuItem key={index} value={item._id}>
                                      {item.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                        </>
                      ) : (
                        <></>
                      )}
                    </>

                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      Related Product
                    </Typography>

                    <>
                      {relatProd === 1 ? (
                        <Typography sx={{ m: 2 }}>
                          <TextField
                            size="small"
                            sx={{ width: "60%" }}
                            id="standard-bare"
                            variant="outlined"
                            {...register("search", { required: true })}
                            error={errors.search}
                            InputProps={{
                              endAdornment: (
                                <IconButton>
                                  <SearchOutlined />
                                </IconButton>
                              ),
                            }}
                          />
                        </Typography>
                      ) : (
                        <>
                          <Typography>
                            <Button
                              sx={{
                                mr: 3,
                                mt: 1,
                                borderRadius: "70px",
                                backgroundColor: "#00A787",
                                "&:hover": {
                                  backgroundColor: "#00A787",
                                },
                                color: "#fff",
                                fontSize: "12px",
                              }}
                              variant="contained"
                              onClick={() => setRelatProduct(1)}
                            >
                              Add a related product
                            </Button>
                          </Typography>
                        </>
                      )}
                    </>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      mt: "-10px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      ml: -15,
                    }}
                  >
                    Combinations
                    <Tooltip title={Combinations}>
                      <InfoIcon sx={{ fontSize: 12 }} />
                    </Tooltip>
                  </Typography>

                  <Box>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={combination}
                        onChange={handleChangecombination}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            ml: "-7.5rem",
                            width: "200%",
                          }}
                        >
                          <Box
                            sx={{
                              fontsize: "12px",
                              width: "300%",
                            }}
                          >
                            <FormControlLabel
                              value="Simple Product"
                              control={
                                <Radio
                                  size="small"
                                  style={{ color: "#00A787" }}
                                />
                              }
                              label={
                                <Typography sx={{ fontSize: 14 }}>
                                  Simple Product
                                </Typography>
                              }
                            />
                          </Box>

                          <Box
                            sx={{
                              fontsize: "12px",
                              // mr: "110px",
                              width: "600%",
                            }}
                          >
                            <FormControlLabel
                              value={true}
                              control={
                                <Radio
                                  style={{ mt: -1, color: "#00A787" }}
                                  size="small"
                                />
                              }
                              // label='Product with combinations'
                              label={
                                <Typography sx={{ fontSize: 14 }}>
                                  Product with combinations
                                </Typography>
                              }
                            />
                          </Box>
                        </Box>
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        ml: -15,
                      }}
                    >
                      Reference
                      <Tooltip title={reference}>
                        <InfoIcon sx={{ fontSize: 12 }} />
                      </Tooltip>
                    </Typography>
                    <Typography
                      sx={{
                        ml: "10rem",
                        fontSize: "14px",
                        fontWeight: "bold",

                        mt: "10px",
                      }}
                    >
                      Quantity
                      <Tooltip>
                        <InfoIcon sx={{ fontSize: 12 }} />
                      </Tooltip>
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex" }}>
                    <Grid item xs={4}>
                      <Box>
                        <Typography>
                          <TextField
                            size="small"
                            sx={{
                              mt: "10px",
                              fontSize: "12px",
                              fontWeight: "bold",
                              ml: -15,
                            }}
                            width="20%"
                            id="margin-normal"
                            margin="normal"
                            value={referenced}
                            onChange={handlereference}
                            // {...register("reference", {
                            //   required: true,
                            // })}
                            InputProps={{
                              style: { fontSize: 13 },
                            }}
                          />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <Box>
                        <Typography>
                          <TextField
                            sx={{ m: 1 }}
                            size="small"
                            width="50%"
                            // label="0"
                            id="margin-normal"
                            margin="normal"
                            {...register("quantity", {
                              // required: true,
                            })}
                            inputProps={{ readOnly: true }}
                          />
                        </Typography>
                      </Box>
                    </Grid>
                  </Box>

                  <Typography
                    sx={{
                      mt: "10px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      ml: -15,
                    }}
                  >
                    Price
                    <Tooltip title={price}>
                      <InfoIcon sx={{ fontSize: 12 }} />
                    </Tooltip>
                  </Typography>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        mt: "10px",
                        ml: -15,
                      }}
                    >
                      <TextField
                        size="small"
                        label="Tax excluded"
                        id="outlined-start-adornment"
                        value={Prodexclusive}
                        onChange={handleProdexclusive}
                        // {...register("taxexcluded", { required: true })}
                        sx={{ m: 1, width: "100%" }}
                        inputProps={{ readOnly: true }}
                        InputProps={{
                          style: { fontSize: 13 },
                          startAdornment: (
                            <InputAdornment position="start">
                              <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      <FormControl sx={{ width: "100%", mt: 0.7 }} size="small">
                        <InputLabel id="demo-select-small-label">
                          Tax Rule
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          size="small"
                          label="Tax Rule"
                          value={Taxprice}
                          onChange={taxesrule}
                          inputProps={{ readOnly: true }}
                        >
                          {taxes?.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={item._id}
                              onClick={() => setpercentage(item._id)}
                            >
                              {item.Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <TextField
                        size="small"
                        label="Tax included"
                        // {...register("taxincluded", { required: true })}
                        value={Prodinclusive}
                        onChange={(e) => setProdinclusive(e.target.value)}
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "100%" }}
                        inputProps={{ readOnly: true }}
                        InputProps={{
                          style: { fontSize: 13 },
                          startAdornment: (
                            <InputAdornment position="start">
                              <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        mt: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        ml: -15,
                      }}
                    >
                      categories
                      <Tooltip title={categories}>
                        <InfoIcon sx={{ fontSize: 12 }} />
                      </Tooltip>
                    </Typography>

                    <TreeView
                      aria-label="rich object"
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpanded={["root"]}
                      defaultExpandIcon={<ChevronRightIcon />}
                      // onChange={(nodeId) => setParent(nodeId)}
                      onNodeSelect={handleSelectedItems}
                      sx={{
                        border: "1px solid black",
                        p: 1,

                        ".MuiTreeItem-root": {
                          ".Mui-focused:not(.Mui-selected)": classes.focused,
                          ".Mui-selected, .Mui-focused.Mui-selected, .Mui-selected:hover":
                            classes.selected,
                        },
                      }}
                    >
                      {/* {categorymasterallList?.map((item) =>
                                renderTree(item), */}
                      {categorymasterallList?.map((item) => (
                        <>
                          <TreeItem
                            key={item._id}
                            nodeId={item._id}
                            label={
                              parentId === item._id ? (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      size="small"
                                      style={{
                                        mt: -1,
                                        color: "#00A787",
                                      }}
                                      name="file"
                                      checked={checkedtree}
                                    />
                                  }
                                  label={
                                    <Typography sx={{ fontSize: 12 }}>
                                      {item.name}
                                    </Typography>
                                  }
                                  key={item._id}
                                />
                              ) : (
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      style={{
                                        mt: -1,
                                        color: "#00A787",
                                      }}
                                      size="small"
                                      name="file"
                                    />
                                  }
                                  label={
                                    <Typography sx={{ fontSize: 12 }}>
                                      {item.name}
                                    </Typography>
                                  }
                                  key={item._id}
                                />
                              )
                            }
                          >
                            {item.children
                              ?.filter((childItem) => {
                                return childItem.parent === item._id;
                              })
                              ?.map((childItem) => (
                                <>
                                  <TreeItem
                                    key={item._id}
                                    nodeId={
                                      `${item._id}` + "-" + `${childItem._id}`
                                    }
                                    label={
                                      childId === childItem._id ? (
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              style={{
                                                mt: -1,
                                                color: "#00A787",
                                              }}
                                              size="small"
                                              name="file"
                                              checked={checkedtree}
                                            />
                                          }
                                          label={
                                            <Typography sx={{ fontSize: 12 }}>
                                              {childItem.name}
                                            </Typography>
                                          }
                                          key={childItem._id}
                                        />
                                      ) : (
                                        <FormControlLabel
                                          sx={{ fontSize: "12px" }}
                                          control={
                                            <Checkbox
                                              style={{
                                                mt: -1,
                                                color: "#00A787",
                                              }}
                                              size="small"
                                              name="file"
                                            />
                                          }
                                          label={
                                            <Typography sx={{ fontSize: 12 }}>
                                              {childItem.name}
                                            </Typography>
                                          }
                                          key={childItem._id}
                                        />
                                      )
                                    }
                                  >
                                    {childItem.children
                                      ?.filter((grandItem) => {
                                        return (
                                          grandItem.parent === childItem._id
                                        );
                                      })
                                      ?.map((grandItem) => (
                                        <>
                                          <TreeItem
                                            key={item._id}
                                            nodeId={
                                              `${item._id}` +
                                              "-" +
                                              `${childItem._id}` +
                                              "-" +
                                              `${grandItem._id}`
                                            }
                                            label={
                                              grandchildId === grandItem._id ? (
                                                <FormControlLabel
                                                  sx={{
                                                    fontSize: "12px",
                                                  }}
                                                  control={
                                                    <Checkbox
                                                      style={{
                                                        mt: -1,
                                                        color: "#00A787",
                                                      }}
                                                      size="small"
                                                      name="file"
                                                      checked={checkedtree}
                                                      // onChange={handleChange}
                                                    />
                                                  }
                                                  label={
                                                    <Typography
                                                      sx={{
                                                        fontSize: 12,
                                                      }}
                                                    >
                                                      {grandItem.name}
                                                    </Typography>
                                                  }
                                                  key={grandItem._id}
                                                />
                                              ) : (
                                                <FormControlLabel
                                                  sx={{
                                                    fontSize: "12px",
                                                  }}
                                                  control={
                                                    <Checkbox
                                                      style={{
                                                        mt: -1,
                                                        color: "#00A787",
                                                      }}
                                                      size="small"
                                                      name="file"
                                                      // onChange={handleChange}
                                                    />
                                                  }
                                                  label={
                                                    <Typography
                                                      sx={{
                                                        fontSize: 12,
                                                      }}
                                                    >
                                                      {grandItem.name}
                                                    </Typography>
                                                  }
                                                  key={grandItem._id}
                                                />
                                              )
                                            }
                                          ></TreeItem>
                                        </>
                                      ))}
                                  </TreeItem>
                                </>
                              ))}
                          </TreeItem>
                        </>
                      ))}
                    </TreeView>
                  </Grid>
                  <Typography
                    sx={{
                      mt: "10px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      ml: -15,
                    }}
                  >
                    Create a new category
                    <Tooltip title={newcategories}>
                      <InfoIcon sx={{ fontSize: 12 }} />
                    </Tooltip>
                  </Typography>

                  {category === 1 ? (
                    <>
                      <Box sx={{ m: 2, p: 1 }}>
                        <Typography>New Category name</Typography>

                        <Typography sx={{ mt: "20px" }}>
                          <TextField
                            id="outlined-size-small"
                            defaultValue="Category name"
                            size="small"
                            InputProps={{
                              style: { fontSize: 13 },
                            }}
                          />
                        </Typography>

                        <Typography sx={{ mt: "20px" }}>
                          Parent of the category
                        </Typography>

                        <Typography sx={{ mt: "20px" }}>
                          <TextField
                            id="outlined-size-small"
                            defaultValue="Home"
                            size="small"
                            InputProps={{
                              style: { fontSize: 13 },
                            }}
                          />
                        </Typography>

                        <Typography sx={{ mt: "10px" }}>
                          <Button variant="contained">Cancel</Button>
                          <Button variant="contained" sx={{ ml: "50px" }}>
                            Create
                          </Button>
                        </Typography>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Typography>
                        <Button
                          sx={{
                            mr: 3,
                            mt: 1,
                            borderRadius: "70px",
                            backgroundColor: "#00A787",
                            "&:hover": { backgroundColor: "#00A787" },
                            color: "#fff",
                            fontSize: "12px",
                            ml: -15,
                          }}
                          variant="contained"
                          onClick={() => setCategory(1)}
                        >
                          Create a Category
                        </Button>
                      </Typography>

                      <Typography>
                        <Button
                          type="submit"
                          sx={{
                            mr: 1,
                            mt: 5,
                            borderRadius: "70px",
                            backgroundColor: "#00A787",
                            "&:hover": { backgroundColor: "#00A787" },
                            color: "#fff",
                            ml: "15rem",
                          }}
                          variant="contained"
                        >
                          Save
                        </Button>
                      </Typography>
                    </>
                  )}
                </Grid>
              </Grid>
            </Box>
          )}
          {/* ************************************************************************** */}

          {/* ************************************************************************* */}
          {tabIndex === 1 && <ProductQuantitiesSreen />}
          {tabIndex === 2 && <ProductShippingScreen />}
          {tabIndex === 3 && <ProdPricingScreen />}
          {tabIndex === 4 && <SeoScreen />}
          {tabIndex === 5 && <OptionsScreen />}
        </Box>
      )}
    </>
  );
}
export default CatCreateProductScreen;

import React from 'react';
import { Component } from 'react'
import { Header, Button, Menu, Segment, Table, Image, Grid, Dropdown, Divider } from 'semantic-ui-react';
import Graph from './graph';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import _ from 'lodash'
import { timingSafeEqual } from 'crypto';
import { thisTypeAnnotation, thisExpression } from '@babel/types';
import Chart from "react-google-charts";
import Lamp from './Lamp'
import Searching from './Search'

//HAVE TO DO A FETCH CALL TO GET THINGS FROM THE DATA BASE
var mArray = [];
var metricResponder;
var raresult = 0;
var rereresult = 0;
var numbersArray = [];
var numberOption;
var zz;
var dataInfo;
var finalArray = [];
var h;
var b;
var finalArray2 = [];
var lastData;
var hold2 = [];
var spOption;
var ui;
var t;
//single letters are used as variables in for loops


const export_dropdown_options = [
    { value: 'pdf', text: 'pdf' },
    { value: 'eis', text: '.eis' },
    { value: 'txt', text: '.txt' },
    { value: 'xls', text: '.xls' }
] //end dropdown options

//------------------------------------------------------------------------------------------------------------------------------------------------------------
//var enterSPD =  [0,0,0,0,0,0,0.0000015096,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.000019117,0.000065244,0,0,0,0,0,0.000018352,0.00000053906,0.0000024213,0.000095229,0.00004318,0.000024558,0.000064537,0.000043974,0,0.000027943,0.0002329,0.00022234,0.00021973,0.00028315,0.00023166,0.00020966,0.00043675,0.00058831,0.00063488,0.00070955,0.00081486,0.00088896,0.0010312,0.0012456,0.001274,0.001377,0.0014938,0.0017239,0.0020156,0.0023178,0.0025425,0.0028903,0.00314,0.0034063,0.0037498,0.0041058,0.0045461,0.0051099,0.0055608,0.0060647,0.0068037,0.0075095,0.00833,0.0091122,0.010042,0.011083,0.012177,0.013514,0.01484,0.016017,0.017366,0.018733,0.020005,0.021103,0.021955,0.022676,0.023223,0.023306,0.022942,0.022567,0.021937,0.020973,0.02011,0.019029,0.017942,0.017027,0.016036,0.015091,0.014185,0.013502,0.012982,0.012346,0.011868,0.01145,0.010789,0.01026,0.0097845,0.0092346,0.0088,0.0083486,0.0078232,0.0074766,0.0071036,0.0067314,0.0064197,0.0061713,0.0059188,0.0057115,0.005553,0.0053749,0.0052752,0.0051864,0.0050744,0.0049499,0.0049107,0.004869,0.0048146,0.0047632,0.0047419,0.0047814,0.004787,0.0047961,0.004871,0.0049035,0.0049847,0.0050168,0.0050657,0.0051086,0.0051641,0.0053674,0.0054884,0.0055812,0.0057032,0.0058063,0.005909,0.0060093,0.0061572,0.0062514,0.0063656,0.0064669,0.0065051,0.0066474,0.006784,0.0068973,0.0069624,0.006994,0.0071396,0.0072192,0.0072234,0.0072836,0.0074217,0.007526,0.0074618,0.007518,0.0075579,0.0075989,0.007614,0.007699,0.0078426,0.0079181,0.0079758,0.0080426,0.0080261,0.0080537,0.0081371,0.0081487,0.0081475,0.0082862,0.0083096,0.0083101,0.0082538,0.008262,0.0083082,0.0082889,0.0083339,0.0083645,0.0083093,0.0082269,0.0082772,0.0083701,0.0082911,0.0082522,0.0081868,0.0081143,0.008174,0.0081903,0.0082412,0.0081418,0.0080919,0.0080858,0.0079932,0.0079536,0.0079082,0.0079294,0.0078974,0.0078623,0.0077957,0.0077553,0.0077978,0.0077081,0.0076086,0.007666,0.0075797,0.0074257,0.0073866,0.0073662,0.0072574,0.0072547,0.0072515,0.0071481,0.0070954,0.007005,0.0069204,0.0068883,0.0068093,0.0067821,0.0067035,0.0066155,0.0065395,0.0065417,0.0065829,0.0063181,0.0061201,0.0060811,0.006013,0.0059244,0.0059176,0.0058972,0.0057796,0.0056655,0.0055626,0.0055749,0.0055747,0.0054698,0.0053947,0.0053175,0.0052102,0.0050813,0.0051444,0.0050441,0.0049107,0.0048971,0.0047858,0.0046401,0.0046122,0.0045945,0.0045437,0.0045325,0.0043132,0.0041811,0.0041685,0.0040053,0.0040541,0.0040672,0.003948,0.003858,0.0037962,0.0036341,0.0036911,0.0036264,0.0035333,0.0035954,0.0034746,0.0034268,0.0032575,0.0032472,0.0031958,0.0029668,0.0029534,0.0029679,0.0029461,0.0027283,0.0027339,0.0027047,0.0026736,0.0026012,0.002568,0.0025276,0.0025071,0.0024186,0.0022856,0.0022515,0.0022108,0.0020957,0.002142,0.0020223,0.0019468,0.0019646,0.00186,0.0017898,0.0016984,0.0018029,0.0017964,0.001598,0.0015535,0.0014908,0.0016014,0.001662,0.0014968,0.0015353,0.001413,0.0013867,0.001367,0.0012454,0.0013206,0.001236,0.0010728,0.0010832,0.0010863,0.00090647,0.00090358,0.00081978,0.00093285,0.0010903,0.0010803,0.00085966,0.0006569,0.00074962,0.00075382,0.00083852,0.00059667,0.00064796,0.00084201,0.00080616,0.0006791,0.00065248,0.00061019,0.0006327,0.00063059,0.00072249,0.0007211,0.00044959,0.00023649,0.00040013,0.0006692,0.00044921,0.00047015,0.00045497,0.00055161,0.00055065,0.00050951,0.00047482,0.00045263,0.00044884,0.00047939,0.00033114,0.00034302,0.00020767,0.00038185,0.00031213,0.00012598,0.00023577,0.00031852,0.00017718,0.00014881,0.000075044,0.00011845,0.00003516,0.0000028057,0.000099924,0.00020553,0.00020694,0.00025627,0.00016396,0.00024973,0.0001083,0.00012334,0.000132,0.00016329,0.00012404,0.00019365,0.0000048463,0,0,0,0.00001251,0.00018304,0,0,0,0.000011653,0,0,0.000091518,0.0003246,0.00000019015,0,0.000020734,0.000098699,0,0,0,0.000060899];
//var defaultSPD = [0,0,0,0,0,0,0,0,0,0,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.49,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,0.33,,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.22,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.15,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.14,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.21,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.43,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,0.64,,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.85,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.87,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0.88,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//var defaultSPD = enterSPD.slice(30, enterSPD.length-171);

//var defaultSPD =  [0.0044,0.0046,0.005,0.0028,0.0037,0.0026,0.0053,0.0031,0.0043,0.0047,0.0053,0.0057,0.0071,0.0085,0.0098,0.0122,0.0145,0.0185,0.0228,0.0287,0.0365,0.0454,0.0573,0.0716,0.0872,0.1054,0.1259,0.151,0.1799,0.2131,0.2543,0.301,0.352,0.408,0.4559,0.4967,0.5141,0.5002,0.4638,0.4184,0.3829,0.3534,0.3398,0.3259,0.3152,0.3034,0.2923,0.2835,0.2796,0.2854,0.2923,0.3046,0.3187,0.3378,0.353,0.3708,0.3907,0.4095,0.429,0.4472,0.4609,0.4785,0.4917,0.5039,0.5144,0.5256,0.529,0.5384,0.5452,0.5534,0.5604,0.5648,0.5702,0.5807,0.5869,0.5949,0.6018,0.6118,0.6213,0.6311,0.6372,0.645,0.6539,0.6608,0.6688,0.6742,0.6802,0.6833,0.6878,0.6906,0.691,0.6938,0.6941,0.698,0.6964,0.6977,0.6971,0.6981,0.6966,0.6986,0.7003,0.7035,0.7063,0.7114,0.7166,0.725,0.7328,0.7432,0.7524,0.7646,0.7771,0.7921,0.8081,0.8241,0.8382,0.8532,0.8707,0.8894,0.9051,0.9198,0.9311,0.9474,0.9605,0.9707,0.9778,0.9842,0.9924,0.9939,0.9947,0.9982,0.9984,0.9928,0.9856,0.9737,0.9634,0.952,0.9362,0.9201,0.9028,0.8871,0.8689,0.8482,0.8272,0.8024,0.7814,0.7584,0.7336,0.7113,0.6839,0.6616,0.6379,0.6141,0.5902,0.5664,0.5415,0.5194,0.494,0.4737,0.4518,0.4318,0.4106,0.3916,0.3708,0.3519,0.3361,0.3195,0.3019,0.2841,0.2695,0.2547,0.2424,0.2276,0.2152,0.2036,0.1914,0.18,0.1701,0.1597,0.1508,0.1423,0.133,0.1259,0.1177,0.1116,0.1043,0.0987,0.0925,0.0866,0.0817,0.0767,0.0715,0.0665,0.0635,0.0598,0.0554,0.052,0.0493,0.0456,0.0429,0.0414,0.0415];
//------var defaultSPD;
//=[0.000172174,0.00019782,0.000172848,0.000163227,0.00019036,0.000207698,0.000207333,0.000205626,0.000219011,0.000243203,0.000250086,0.000244639,0.000252732,0.000262975,0.000276727,0.000290483,0.00028693,0.000297219,0.000312412,0.000315359,0.000337491,0.000344327,0.000337119,0.000363282,0.000389649,0.000407566,0.00041797,0.000434073,0.000442378,0.000444949,0.000456075,0.000482237,0.000503746,0.000508244,0.00051079,0.000523827,0.00054248,0.000554715,0.000583674,0.000604276,0.000610428,0.000646404,0.000674084,0.000699585,0.000741093,0.000767675,0.000785589,0.00080585,0.000841434,0.000885663,0.000933614,0.000981088,0.00102862,0.00107423,0.00111577,0.00114923,0.00119956,0.00126482,0.00133148,0.00138322,0.00144021,0.00151,0.00157309,0.00162601,0.00167451,0.00172948,0.00180016,0.00187155,0.00193338,0.00198944,0.00204157,0.00209568,0.00215704,0.00219709,0.00224178,0.00230715,0.00236484,0.00240902,0.00245309,0.00252348,0.00258008,0.00263304,0.00269515,0.00274847,0.00280766,0.00287297,0.00292793,0.00298318,0.00304171,0.00310261,0.00315364,0.00321186,0.00328218,0.00334429,0.00340726,0.00347082,0.00353171,0.00359507,0.00366292,0.00373399,0.00379765,0.00387051,0.00395153,0.00402396,0.00409127,0.00415639,0.00422352,0.00430151,0.00437621,0.00444173,0.00450698,0.0045849,0.00466572,0.00472928,0.00480616,0.0048882,0.00496589,0.00504995,0.00513396,0.00521344,0.00528571,0.0053713,0.00546538,0.00555368,0.00562803,0.00570766,0.00580115,0.00588494,0.00596953,0.00605666,0.0061415,0.00622863,0.00631495,0.00639675,0.00647968,0.00656847,0.00666355,0.00675598,0.00684861,0.00694155,0.00703297,0.00712488,0.00721611,0.00730705,0.00741329,0.00751468,0.00760288,0.00769554,0.00779143,0.00788892,0.00798469,0.00808532,0.0081877,0.00828745,0.00838375,0.00848458,0.00859149,0.00869148,0.00879345,0.00889897,0.00900473,0.00910574,0.00921401,0.00934005,0.00945291,0.00955333,0.00964845,0.0097525,0.00986606,0.00998117,0.0100808,0.010181,0.0102927,0.0104205,0.0105271,0.0106331,0.0107541,0.0108701,0.0109805,0.0110883,0.0112009,0.011319,0.0114368,0.0115469,0.0116648,0.0117839,0.0118974,0.012018,0.0121366,0.0122494,0.0123617,0.0124877,0.0126216,0.0127422,0.0128585,0.0129744,0.013093,0.0132226,0.0133515,0.0134729,0.0135978,0.0137267,0.0138545,0.013965,0.0140883,0.0142214,0.0143461,0.0144722,0.0146023,0.0147358,0.0148634,0.0149892,0.0151171,0.0152497,0.0153771,0.0155011,0.0156348,0.0157648,0.0158922,0.0160224,0.0161573,0.0162919,0.0164228,0.0165606,0.0166936,0.0168182,0.0169478,0.0170776,0.0172082,0.0173449,0.0174795,0.0176161,0.0177598,0.0178883,0.0180154,0.0181518,0.0182835,0.0184198,0.0185615,0.0186944,0.0188304,0.0189688,0.0191012,0.0192313,0.0193592,0.0194838,0.0196069,0.0197348,0.0198704,0.0200031,0.0201449,0.0202959,0.0204403,0.0205872,0.0207391,0.0208957,0.0210491,0.0211969,0.0213392,0.0214825,0.0216285,0.0217744,0.0218991,0.0220511,0.0222333,0.0223782,0.0225147,0.0226398,0.0227358,0.022829,0.0229347,0.0230591,0.0231736,0.0232847,0.023401,0.0235226,0.0236386,0.0237495,0.023872,0.0239917,0.024116,0.0242632,0.0244058,0.0245426,0.0246787,0.0248103,0.0249429,0.0250797,0.0252168,0.0253558,0.0254955,0.0256323,0.0257657,0.0259011,0.0260487,0.0261909,0.0263284,0.0264652,0.0265997,0.0267299,0.0268576,0.0270052,0.0271427,0.027262,0.0273868,0.0275199,0.0276553,0.02778,0.0279065,0.0280341,0.028161,0.0282878,0.0284224,0.0285628,0.0286752,0.0287894,0.0289171,0.029041,0.0291739,0.0293081,0.0294245,0.0295452,0.0296672,0.0297842,0.0299098,0.0300351,0.0301553,0.0302839,0.0304045,0.0305173,0.0306503,0.0307787,0.0309035,0.0310371,0.0311663,0.0313018,0.0314547,0.0315945,0.0317195,0.0318353,0.0319626,0.0320831,0.0321946,0.0323149,0.0324493,0.0325868,0.0327058,0.032813,0.032921,0.0330405,0.0331728,0.033301,0.0334166,0.0335321,0.0336525,0.0337725,0.0338742,0.0339848,0.0341061,0.0342289,0.0343481,0.0344628,0.0345751,0.0346835,0.0347939,0.0349112,0.0350421,0.0351654,0.0352762,0.0353832,0.0354953,0.0356085,0.035713,0.0358186,0.0359324,0.0360561,0.0361776,0.0362911,0.0363953,0.0364909,0.0366012,0.0367221,0.0368322,0.0369424,0.0370543,0.0371636,0.037262,0.0373667,0.0374864,0.0376034,0.0377135,0.0378147,0.0379086,0.0380138,0.0381248,0.0382288,0.0383434,0.0384591,0.0385651,0.0386649,0.0387688,0.0388774,0.0389741,0.0390755,0.0391806,0.0392785,0.039374,0.0394733,0.039581,0.0396789,0.039777,0.0398812,0.0399886,0.0400859,0.0401746,0.0402686,0.0403624,0.040457,0.0405552,0.040652,0.0407425,0.0408276,0.0409219,0.0410236,0.041125,0.041211,0.0412943,0.0413842,0.0414855,0.0415709,0.041658,0.0417583,0.0418476,0.041933,0.0420186,0.0421027,0.0421868,0.0422697,0.0423498,0.0424432,0.0425377,0.0426241,0.0427086,0.0427884,0.0428643,0.0429402,0.0430219,0.0431028,0.0431761,0.0432639,0.0433535]
//console.log(shSPD.length);
//console.log(defaultSPD.length);
//console.log(rawSPD.length);

//SPD to Ra and Re conversion and CCT methods from:
//https://www.waveformlighting.com/tech/color-rendering-index-calculator

/* function getSPD(SPD) {

    return xnormalize(defaultSPD);
}
 */


//-------------------------------------------------------------------------------------------------------------------------------------------------------------


export default class InstProf extends Component {

    constructor(props) {
        super(props);
        this.state = { pdf: false }
        this.state = { eis: '' }
        this.state = { txt: '' }
        this.state = { xls: '' }
        this.state = { S: [] }
        this.state = { specs: [] }
        this.state = { doingCalculations: false }
        this.state = { save: [] }
        this.state = { serverSide: 'temp' }
        this.state = { fastArray2: [] }
        this.state = {SpectralDataNumbersArrayFromJSON: []}
        this.state = {mrID: ''}
        this.state = {mrlumens: ''}
        this.state = {mrwatts: ''}
        this.state = {mrvolts: ''}
        this.state = {mrcc_X: ''}
        this.state = {mrcc_Y: ''}
        this.state = {mrcc_Z: ''}
        this.state = {mrCIEXY: ''}
        this.state = {mrCCT: ''}
        this.state = {mrFSI: ''}
        this.state = {mrFSCI: ''}
        this.state = {mrGAI: ''}
        this.state = {mrCRI_R1: ''}
        this.state = {mrCRI_R2: ''}
        this.state = {mrCRI_R3: ''}
        this.state = {mrCRI_R4: ''}
        this.state = {mrCRI_R5: ''}
        this.state = {mrCRI_R6: ''}
        this.state = {mrCRI_R7: ''}
        this.state = {mrCRI_R8:''}
        this.state = {mrCRI: ''}

    }
    componentDidMount() {
        this.getProductsSpectral();
    }

    getProductsSpectral = _ => {
        fetch('http://localhost:4000/SpectralData')
            .then(response => response.json())
            .then(_ = (response) => {
                this.setState({ S: response.data })
                this.setState({ serverSide: Object.values(response.data) })
                console.log("WE FOR SURE NEED TO KNOW", this.state.S)
                for (t = 0; t < this.state.serverSide.length; t++) {
                    spOption =
                    {
                        "id": this.state.serverSide[t].SpectraSearchID,
                        "spectralInfo": this.state.serverSide[t].SpectralData,
                    }
                    if (hold2.length < this.state.serverSide.length) {
                        hold2.push(spOption);
                    }
                }
                this.setState({ fastArray2: hold2 });
                console.log("marry's spoption", hold2);
                //depending on which one they click, you get the id which is this.props.s00
                //if the id  is equal to the id in [].id then you dispaly that [].spectraldata
                for (ui = 0; ui < this.state.fastArray2.length; ui++) {
                    if (this.props.s00 === this.state.fastArray2[ui].id) {
                        console.log("we wanna display the information from", this.state.fastArray2[ui].id)
                        console.log("which is in place", ui)
                        this.setState({ specs: (this.state.serverSide[ui].SpectralData).split(',') })
                        console.log("see it", this.state.specs);
                    }
                    else { console.log("NOOPE") }
                }
                finalArray = []
                for (h = 0; h < this.state.specs.length; h++) {
                    b = this.state.specs[h]
                    finalArray.push(b);
                }

                lastData = finalArray.map(Number)
                this.setState({ save: lastData })
                console.log("EVERYTHING", lastData)
            })
            .catch(err => console.error(err))




    fetch('http://localhost:4000/metrics')
      .then(response => response.json())
      .then(_ = (response) => {
        
            metricResponder = Object.values(response.data[this.props.s00])[0];
                     
            console.log("and hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", metricResponder)
            this.setState({mrID: Object.values(response.data[this.props.s00])[0]})
            this.setState({mrlumens: Object.values(response.data[this.props.s00])[20]})
            this.setState({mrwatts: Object.values(response.data[this.props.s00])[19]})
            this.setState({mrvolts: Object.values(response.data[this.props.s00])[18]})
            this.setState({mrcc_X:  Object.values(response.data[this.props.s00])[1]})
            this.setState({mrcc_Y:  Object.values(response.data[this.props.s00])[2]})
            this.setState({mrcc_Z:  Object.values(response.data[this.props.s00])[3]})
            this.setState({mrCIEXY: Object.values(response.data[this.props.s00])[4]})
            this.setState({mrCCT: Object.values(response.data[this.props.s00])[5]})
            this.setState({mrFSI: Object.values(response.data[this.props.s00])[6]})
            this.setState({mrFSCI: Object.values(response.data[this.props.s00])[7]})
            this.setState({mrGAI: Object.values(response.data[this.props.s00])[8]})
            this.setState({mrCRI_R1: Object.values(response.data[this.props.s00])[9]})
            this.setState({mrCRI_R2: Object.values(response.data[this.props.s00])[10]})
            this.setState({mrCRI_R3: Object.values(response.data[this.props.s00])[11]})
            this.setState({mrCRI_R4: Object.values(response.data[this.props.s00])[12]})
            this.setState({mrCRI_R5: Object.values(response.data[this.props.s00])[13]})
            this.setState({mrCRI_R6: Object.values(response.data[this.props.s00])[14]})
            this.setState({mrCRI_R7: Object.values(response.data[this.props.s00])[15]})
            this.setState({mrCRI_R8: Object.values(response.data[this.props.s00])[16]})
            this.setState({mrCRI: Object.values(response.data[this.props.s00])[17]})
    
        
        //metricResponder = JSON.parse(Object.values(response.data[this.props.s00])[6])
        
      })

     
    }

    // componentWillMount = () =>{
    //     this.calculations();
    // }


  


    jsPdfGenerator = () => {
        console.log("printing")
        const input = document.getElementsByClassName('target')[0];
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('l', 'pt', 'a4');
                pdf.addImage(imgData, 'JPEG', 20, 20, 770, 450);
                pdf.save('instrumentpage.pdf');
            })
        //document.getElementsByClassName("inst-dropdown")[0].innerHTML = save;
        return;
    }
    //<Graph className="theGraph"></Graph>


    render() {

        var lastData;
        return (
            <Segment className='target'>
                <Dropdown className="inst-dropdown" closeOnChange={true} text='Export as'>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.jsPdfGenerator} text='pdf' />
                        <Dropdown.Item onClick={_ = () => { console.log('eis') }} text='eis' />
                        <Dropdown.Item onClick={_ = () => { console.log('txt') }} text='txt' />
                        <Dropdown.Item onClick={_ = () => { console.log('xls') }} text='xls' />
                    </Dropdown.Menu>
                </Dropdown>

                <Header as='h1'>{this.props.s1}</Header>
                <Header size='medium'>Catalog Number: {this.props.s0}</Header>

                <br />

                <Grid>
                    <Grid.Row>
                        <Grid.Column id="firstCol" width={9}>
                            <div className="inst-info">
                                <Header className="headerForTable" size='medium'>Basic Information</Header>
                                <Table fixed='true' size='small' celled>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell width='2'>Manufacturer:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s2}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width='2'>Description:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s3}</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>


                                <Header className="headerForTable" size='medium'>Creation Information</Header>
                                <Table fixed='true' size='small' celled>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell width='2'>Document Creator:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s4}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width='2'>Laboratory:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s5}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width='2'>Creation Date:</Table.Cell>
                                            <Table.Cell width='2'>{this.props.s6}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell width='2'>Report Number: </Table.Cell>
                                            <Table.Cell width='2'>{this.props.s7} </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                                {console.log("tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt", this.state.mrcc_X)}

                                <Header className="headerForTable" size='medium'>Calculations</Header>

                                <Button className="headerForTable" onClick={_ = () => { this.setState({ doingCalculations: true }); }}>Reveal Calculations</Button>
                                <Button className="headerForTable" onClick={_ = () => { this.setState({ doingCalculations: false }); document.getElementsByClassName("erroring")[0].innerHTML = '' }}>Hide Calculations</Button>
                                <br />
                                <br />
                                <span className="erroring"></span>

                                {this.state.doingCalculations ?


                                  
                                    <div><br />
                                   
                                        {/* console.log("FSI: "+FSI+"\nFSCI: "+FSCI+"\nxy: "+xy+"\nCCT: "+CCT+"\nGAI: "+GAI+"\nCRI: "+CRI+"\nCRI R1-8: "+CRIArr); */}
                                         <Table fixed='true' size='huge' celled>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CIE (XYZ):</Table.Cell>
                                                    <Table.Cell width='2'>X: {this.state.mrcc_X},   Y: {this.state.mrcc_Y},   Z: {this.state.mrcc_Z}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CIE (x,y):</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrCIEXY}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CCT:</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrCCT}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>FSI (Full Spectrum Index):</Table.Cell>
                                                    <Table.Cell width='2'>FSI: {this.state.mrFSI},  FSCI: {this.state.mrFSCI} </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>GAI (Gamut Area Index):</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrGAI}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CRI:</Table.Cell>
                                                    <Table.Cell width='2'>{this.state.mrCRI}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell width='2'>CRI R1-8:</Table.Cell>
                                                    <Table.Cell width='2'>R1: {this.state.mrCRI_R1}, R2: {this.state.mrCRI_R2}, R3: {this.state.mrCRI_R3}, R4: {this.state.mrCRI_R4}, R5: {this.state.mrCRI_R5}, R6: {this.state.mrCRI_R6}, R7: {this.state.mrCRI_R7}, R8:  {this.state.mrCRI_R8} </Table.Cell>
                                                </Table.Row>

                                            </Table.Body>
                                        </Table> 
                                    </div> : console.log("no calculations")}

                            </div>







                        </Grid.Column>
                        <Grid.Column id="rightCol" width={7}>
                            <Graph real={this.state.save} ssidForGraph={this.props.s00}></Graph>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>






            </Segment>

        ) // end return 
    } // end render
} //end InstProf class
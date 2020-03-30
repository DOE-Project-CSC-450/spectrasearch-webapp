//NOTES:
/* REMEMBER TO DO:
npm install recharts
BEFORE DOIN ALL THIS SHEBANG 

credits to: http://recharts.org/en-US/examples for example chart
*/ 


//import all needed modules and components from React.
import React from 'react';
import { Component } from 'react';
import { Button, Modal, Message, TextArea, Header, Form, Checkbox, Divider, Segment, Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import _ from 'lodash'
import Uploadpage from './uploadpage';


import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend,
  } from 'recharts';



const data_graph1 = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

const data_graph2 = [
  {
		name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
	},
	{
		name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
	},
	{
		name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
	},
	{
		name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
	},
	{
		name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
	},
	{
		name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
	},
	{
		name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
	},
];


//example data for graph
var data_points =[0.000172174,0.00019782,0.000172848,0.000163227,0.00019036,0.000207698,0.000207333,0.000205626,0.000219011,0.000243203,0.000250086,0.000244639,0.000252732,0.000262975,0.000276727,0.000290483,0.00028693,0.000297219,0.000312412,0.000315359,0.000337491,0.000344327,0.000337119,0.000363282,0.000389649,0.000407566,0.00041797,0.000434073,0.000442378,0.000444949,0.000456075,0.000482237,0.000503746,0.000508244,0.00051079,0.000523827,0.00054248,0.000554715,0.000583674,0.000604276,0.000610428,0.000646404,0.000674084,0.000699585,0.000741093,0.000767675,0.000785589,0.00080585,0.000841434,0.000885663,0.000933614,0.000981088,0.00102862,0.00107423,0.00111577,0.00114923,0.00119956,0.00126482,0.00133148,0.00138322,0.00144021,0.00151,0.00157309,0.00162601,0.00167451,0.00172948,0.00180016,0.00187155,0.00193338,0.00198944,0.00204157,0.00209568,0.00215704,0.00219709,0.00224178,0.00230715,0.00236484,0.00240902,0.00245309,0.00252348,0.00258008,0.00263304,0.00269515,0.00274847,0.00280766,0.00287297,0.00292793,0.00298318,0.00304171,0.00310261,0.00315364,0.00321186,0.00328218,0.00334429,0.00340726,0.00347082,0.00353171,0.00359507,0.00366292,0.00373399,0.00379765,0.00387051,0.00395153,0.00402396,0.00409127,0.00415639,0.00422352,0.00430151,0.00437621,0.00444173,0.00450698,0.0045849,0.00466572,0.00472928,0.00480616,0.0048882,0.00496589,0.00504995,0.00513396,0.00521344,0.00528571,0.0053713,0.00546538,0.00555368,0.00562803,0.00570766,0.00580115,0.00588494,0.00596953,0.00605666,0.0061415,0.00622863,0.00631495,0.00639675,0.00647968,0.00656847,0.00666355,0.00675598,0.00684861,0.00694155,0.00703297,0.00712488,0.00721611,0.00730705,0.00741329,0.00751468,0.00760288,0.00769554,0.00779143,0.00788892,0.00798469,0.00808532,0.0081877,0.00828745,0.00838375,0.00848458,0.00859149,0.00869148,0.00879345,0.00889897,0.00900473,0.00910574,0.00921401,0.00934005,0.00945291,0.00955333,0.00964845,0.0097525,0.00986606,0.00998117,0.0100808,0.010181,0.0102927,0.0104205,0.0105271,0.0106331,0.0107541,0.0108701,0.0109805,0.0110883,0.0112009,0.011319,0.0114368,0.0115469,0.0116648,0.0117839,0.0118974,0.012018,0.0121366,0.0122494,0.0123617,0.0124877,0.0126216,0.0127422,0.0128585,0.0129744,0.013093,0.0132226,0.0133515,0.0134729,0.0135978,0.0137267,0.0138545,0.013965,0.0140883,0.0142214,0.0143461,0.0144722,0.0146023,0.0147358,0.0148634,0.0149892,0.0151171,0.0152497,0.0153771,0.0155011,0.0156348,0.0157648,0.0158922,0.0160224,0.0161573,0.0162919,0.0164228,0.0165606,0.0166936,0.0168182,0.0169478,0.0170776,0.0172082,0.0173449,0.0174795,0.0176161,0.0177598,0.0178883,0.0180154,0.0181518,0.0182835,0.0184198,0.0185615,0.0186944,0.0188304,0.0189688,0.0191012,0.0192313,0.0193592,0.0194838,0.0196069,0.0197348,0.0198704,0.0200031,0.0201449,0.0202959,0.0204403,0.0205872,0.0207391,0.0208957,0.0210491,0.0211969,0.0213392,0.0214825,0.0216285,0.0217744,0.0218991,0.0220511,0.0222333,0.0223782,0.0225147,0.0226398,0.0227358,0.022829,0.0229347,0.0230591,0.0231736,0.0232847,0.023401,0.0235226,0.0236386,0.0237495,0.023872,0.0239917,0.024116,0.0242632,0.0244058,0.0245426,0.0246787,0.0248103,0.0249429,0.0250797,0.0252168,0.0253558,0.0254955,0.0256323,0.0257657,0.0259011,0.0260487,0.0261909,0.0263284,0.0264652,0.0265997,0.0267299,0.0268576,0.0270052,0.0271427,0.027262,0.0273868,0.0275199,0.0276553,0.02778,0.0279065,0.0280341,0.028161,0.0282878,0.0284224,0.0285628,0.0286752,0.0287894,0.0289171,0.029041,0.0291739,0.0293081,0.0294245,0.0295452,0.0296672,0.0297842,0.0299098,0.0300351,0.0301553,0.0302839,0.0304045,0.0305173,0.0306503,0.0307787,0.0309035,0.0310371,0.0311663,0.0313018,0.0314547,0.0315945,0.0317195,0.0318353,0.0319626,0.0320831,0.0321946,0.0323149,0.0324493,0.0325868,0.0327058,0.032813,0.032921,0.0330405,0.0331728,0.033301,0.0334166,0.0335321,0.0336525,0.0337725,0.0338742,0.0339848,0.0341061,0.0342289,0.0343481,0.0344628,0.0345751,0.0346835,0.0347939,0.0349112,0.0350421,0.0351654,0.0352762,0.0353832,0.0354953,0.0356085,0.035713,0.0358186,0.0359324,0.0360561,0.0361776,0.0362911,0.0363953,0.0364909,0.0366012,0.0367221,0.0368322,0.0369424,0.0370543,0.0371636,0.037262,0.0373667,0.0374864,0.0376034,0.0377135,0.0378147,0.0379086,0.0380138,0.0381248,0.0382288,0.0383434,0.0384591,0.0385651,0.0386649,0.0387688,0.0388774,0.0389741,0.0390755,0.0391806,0.0392785,0.039374,0.0394733,0.039581,0.0396789,0.039777,0.0398812,0.0399886,0.0400859,0.0401746,0.0402686,0.0403624,0.040457,0.0405552,0.040652,0.0407425,0.0408276,0.0409219,0.0410236,0.041125,0.041211,0.0412943,0.0413842,0.0414855,0.0415709,0.041658,0.0417583,0.0418476,0.041933,0.0420186,0.0421027,0.0421868,0.0422697,0.0423498,0.0424432,0.0425377,0.0426241,0.0427086,0.0427884,0.0428643,0.0429402,0.0430219,0.0431028,0.0431761,0.0432639,0.0433535];

const data_graph3 = [
  {
    wavelength: 350, normalized_power: data_points[0], 
  },
  {
    wavelength: 351, normalized_power: data_points[1],
  },
  {
    wavelength: 352, normalized_power: data_points[2],
  },
  {
    wavelength: 353, normalized_power: data_points[3],
  },
  {
    wavelength: 354, normalized_power: data_points[4],
  },
  {
    wavelength: 750, normalized_power: data_points[200],
  },
];

const data_graph4 = [
  { wavelength: 350, norm_power: data_points[0], }, { wavelength: 351, norm_power: data_points[1], }, { wavelength: 352, norm_power: data_points[2], }, { wavelength: 353, norm_power: data_points[3], }, { wavelength: 354, norm_power: data_points[4], }, { wavelength: 355, norm_power: data_points[5], }, { wavelength: 356, norm_power: data_points[6], }, { wavelength: 357, norm_power: data_points[7], }, { wavelength: 358, norm_power: data_points[8], }, { wavelength: 359, norm_power: data_points[9], }, { wavelength: 360, norm_power: data_points[10], }, { wavelength: 361, norm_power: data_points[11], }, { wavelength: 362, norm_power: data_points[12], }, { wavelength: 363, norm_power: data_points[13], }, { wavelength: 364, norm_power: data_points[14], }, { wavelength: 365, norm_power: data_points[15], }, { wavelength: 366, norm_power: data_points[16], }, { wavelength: 367, norm_power: data_points[17], }, { wavelength: 368, norm_power: data_points[18], }, { wavelength: 369, norm_power: data_points[19], }, { wavelength: 370, norm_power: data_points[20], }, { wavelength: 371, norm_power: data_points[21], }, { wavelength: 372, norm_power: data_points[22], }, { wavelength: 373, norm_power: data_points[23], }, { wavelength: 374, norm_power: data_points[24], }, { wavelength: 375, norm_power: data_points[25], }, { wavelength: 376, norm_power: data_points[26], }, { wavelength: 377, norm_power: data_points[27], }, { wavelength: 378, norm_power: data_points[28], }, { wavelength: 379, norm_power: data_points[29], }, { wavelength: 380, norm_power: data_points[30], }, { wavelength: 381, norm_power: data_points[31], }, { wavelength: 382, norm_power: data_points[32], }, { wavelength: 383, norm_power: data_points[33], }, { wavelength: 384, norm_power: data_points[34], }, { wavelength: 385, norm_power: data_points[35], }, { wavelength: 386, norm_power: data_points[36], }, { wavelength: 387, norm_power: data_points[37], }, { wavelength: 388, norm_power: data_points[38], }, { wavelength: 389, norm_power: data_points[39], }, { wavelength: 390, norm_power: data_points[40], }, { wavelength: 391, norm_power: data_points[41], }, { wavelength: 392, norm_power: data_points[42], }, { wavelength: 393, norm_power: data_points[43], }, { wavelength: 394, norm_power: data_points[44], }, { wavelength: 395, norm_power: data_points[45], }, { wavelength: 396, norm_power: data_points[46], }, { wavelength: 397, norm_power: data_points[47], }, { wavelength: 398, norm_power: data_points[48], }, { wavelength: 399, norm_power: data_points[49], }, { wavelength: 400, norm_power: data_points[50], }, { wavelength: 401, norm_power: data_points[51], }, { wavelength: 402, norm_power: data_points[52], }, { wavelength: 403, norm_power: data_points[53], }, { wavelength: 404, norm_power: data_points[54], }, { wavelength: 405, norm_power: data_points[55], }, { wavelength: 406, norm_power: data_points[56], }, { wavelength: 407, norm_power: data_points[57], }, { wavelength: 408, norm_power: data_points[58], }, { wavelength: 409, norm_power: data_points[59], }, { wavelength: 410, norm_power: data_points[60], }, { wavelength: 411, norm_power: data_points[61], }, { wavelength: 412, norm_power: data_points[62], }, { wavelength: 413, norm_power: data_points[63], }, { wavelength: 414, norm_power: data_points[64], }, { wavelength: 415, norm_power: data_points[65], }, { wavelength: 416, norm_power: data_points[66], }, { wavelength: 417, norm_power: data_points[67], }, { wavelength: 418, norm_power: data_points[68], }, { wavelength: 419, norm_power: data_points[69], }, { wavelength: 420, norm_power: data_points[70], }, { wavelength: 421, norm_power: data_points[71], }, { wavelength: 422, norm_power: data_points[72], }, { wavelength: 423, norm_power: data_points[73], }, { wavelength: 424, norm_power: data_points[74], }, { wavelength: 425, norm_power: data_points[75], }, { wavelength: 426, norm_power: data_points[76], }, { wavelength: 427, norm_power: data_points[77], }, { wavelength: 428, norm_power: data_points[78], }, { wavelength: 429, norm_power: data_points[79], }, { wavelength: 430, norm_power: data_points[80], }, { wavelength: 431, norm_power: data_points[81], }, { wavelength: 432, norm_power: data_points[82], }, { wavelength: 433, norm_power: data_points[83], }, { wavelength: 434, norm_power: data_points[84], }, { wavelength: 435, norm_power: data_points[85], }, { wavelength: 436, norm_power: data_points[86], }, { wavelength: 437, norm_power: data_points[87], }, { wavelength: 438, norm_power: data_points[88], }, { wavelength: 439, norm_power: data_points[89], }, { wavelength: 440, norm_power: data_points[90], }, { wavelength: 441, norm_power: data_points[91], }, { wavelength: 442, norm_power: data_points[92], }, { wavelength: 443, norm_power: data_points[93], }, { wavelength: 444, norm_power: data_points[94], }, { wavelength: 445, norm_power: data_points[95], }, { wavelength: 446, norm_power: data_points[96], }, { wavelength: 447, norm_power: data_points[97], }, { wavelength: 448, norm_power: data_points[98], }, { wavelength: 449, norm_power: data_points[99], }, { wavelength: 450, norm_power: data_points[100], }, { wavelength: 451, norm_power: data_points[101], }, { wavelength: 452, norm_power: data_points[102], }, { wavelength: 453, norm_power: data_points[103], }, { wavelength: 454, norm_power: data_points[104], }, { wavelength: 455, norm_power: data_points[105], }, { wavelength: 456, norm_power: data_points[106], }, { wavelength: 457, norm_power: data_points[107], }, { wavelength: 458, norm_power: data_points[108], }, { wavelength: 459, norm_power: data_points[109], }, { wavelength: 460, norm_power: data_points[110], }, { wavelength: 461, norm_power: data_points[111], }, { wavelength: 462, norm_power: data_points[112], }, { wavelength: 463, norm_power: data_points[113], }, { wavelength: 464, norm_power: data_points[114], }, { wavelength: 465, norm_power: data_points[115], }, { wavelength: 466, norm_power: data_points[116], }, { wavelength: 467, norm_power: data_points[117], }, { wavelength: 468, norm_power: data_points[118], }, { wavelength: 469, norm_power: data_points[119], }, { wavelength: 470, norm_power: data_points[120], }, { wavelength: 471, norm_power: data_points[121], }, { wavelength: 472, norm_power: data_points[122], }, { wavelength: 473, norm_power: data_points[123], }, { wavelength: 474, norm_power: data_points[124], }, { wavelength: 475, norm_power: data_points[125], }, { wavelength: 476, norm_power: data_points[126], }, { wavelength: 477, norm_power: data_points[127], }, { wavelength: 478, norm_power: data_points[128], }, { wavelength: 479, norm_power: data_points[129], }, { wavelength: 480, norm_power: data_points[130], }, { wavelength: 481, norm_power: data_points[131], }, { wavelength: 482, norm_power: data_points[132], }, { wavelength: 483, norm_power: data_points[133], }, { wavelength: 484, norm_power: data_points[134], }, { wavelength: 485, norm_power: data_points[135], }, { wavelength: 486, norm_power: data_points[136], }, { wavelength: 487, norm_power: data_points[137], }, { wavelength: 488, norm_power: data_points[138], }, { wavelength: 489, norm_power: data_points[139], }, { wavelength: 490, norm_power: data_points[140], }, { wavelength: 491, norm_power: data_points[141], }, { wavelength: 492, norm_power: data_points[142], }, { wavelength: 493, norm_power: data_points[143], }, { wavelength: 494, norm_power: data_points[144], }, { wavelength: 495, norm_power: data_points[145], }, { wavelength: 496, norm_power: data_points[146], }, { wavelength: 497, norm_power: data_points[147], }, { wavelength: 498, norm_power: data_points[148], }, { wavelength: 499, norm_power: data_points[149], }, { wavelength: 500, norm_power: data_points[150], }, { wavelength: 501, norm_power: data_points[151], }, { wavelength: 502, norm_power: data_points[152], }, { wavelength: 503, norm_power: data_points[153], }, { wavelength: 504, norm_power: data_points[154], }, { wavelength: 505, norm_power: data_points[155], }, { wavelength: 506, norm_power: data_points[156], }, { wavelength: 507, norm_power: data_points[157], }, { wavelength: 508, norm_power: data_points[158], }, { wavelength: 509, norm_power: data_points[159], }, { wavelength: 510, norm_power: data_points[160], }, { wavelength: 511, norm_power: data_points[161], }, { wavelength: 512, norm_power: data_points[162], }, { wavelength: 513, norm_power: data_points[163], }, { wavelength: 514, norm_power: data_points[164], }, { wavelength: 515, norm_power: data_points[165], }, { wavelength: 516, norm_power: data_points[166], }, { wavelength: 517, norm_power: data_points[167], }, { wavelength: 518, norm_power: data_points[168], }, { wavelength: 519, norm_power: data_points[169], }, { wavelength: 520, norm_power: data_points[170], }, { wavelength: 521, norm_power: data_points[171], }, { wavelength: 522, norm_power: data_points[172], }, { wavelength: 523, norm_power: data_points[173], }, { wavelength: 524, norm_power: data_points[174], }, { wavelength: 525, norm_power: data_points[175], }, { wavelength: 526, norm_power: data_points[176], }, { wavelength: 527, norm_power: data_points[177], }, { wavelength: 528, norm_power: data_points[178], }, { wavelength: 529, norm_power: data_points[179], }, { wavelength: 530, norm_power: data_points[180], }, { wavelength: 531, norm_power: data_points[181], }, { wavelength: 532, norm_power: data_points[182], }, { wavelength: 533, norm_power: data_points[183], }, { wavelength: 534, norm_power: data_points[184], }, { wavelength: 535, norm_power: data_points[185], }, { wavelength: 536, norm_power: data_points[186], }, { wavelength: 537, norm_power: data_points[187], }, { wavelength: 538, norm_power: data_points[188], }, { wavelength: 539, norm_power: data_points[189], }, { wavelength: 540, norm_power: data_points[190], }, { wavelength: 541, norm_power: data_points[191], }, { wavelength: 542, norm_power: data_points[192], }, { wavelength: 543, norm_power: data_points[193], }, { wavelength: 544, norm_power: data_points[194], }, { wavelength: 545, norm_power: data_points[195], }, { wavelength: 546, norm_power: data_points[196], }, { wavelength: 547, norm_power: data_points[197], }, { wavelength: 548, norm_power: data_points[198], }, { wavelength: 549, norm_power: data_points[199], }, { wavelength: 550, norm_power: data_points[200], }, { wavelength: 551, norm_power: data_points[201], }, { wavelength: 552, norm_power: data_points[202], }, { wavelength: 553, norm_power: data_points[203], }, { wavelength: 554, norm_power: data_points[204], }, { wavelength: 555, norm_power: data_points[205], }, { wavelength: 556, norm_power: data_points[206], }, { wavelength: 557, norm_power: data_points[207], }, { wavelength: 558, norm_power: data_points[208], }, { wavelength: 559, norm_power: data_points[209], }, { wavelength: 560, norm_power: data_points[210], }, { wavelength: 561, norm_power: data_points[211], }, { wavelength: 562, norm_power: data_points[212], }, { wavelength: 563, norm_power: data_points[213], }, { wavelength: 564, norm_power: data_points[214], }, { wavelength: 565, norm_power: data_points[215], }, { wavelength: 566, norm_power: data_points[216], }, { wavelength: 567, norm_power: data_points[217], }, { wavelength: 568, norm_power: data_points[218], }, { wavelength: 569, norm_power: data_points[219], }, { wavelength: 570, norm_power: data_points[220], }, { wavelength: 571, norm_power: data_points[221], }, { wavelength: 572, norm_power: data_points[222], }, { wavelength: 573, norm_power: data_points[223], }, { wavelength: 574, norm_power: data_points[224], }, { wavelength: 575, norm_power: data_points[225], }, { wavelength: 576, norm_power: data_points[226], }, { wavelength: 577, norm_power: data_points[227], }, { wavelength: 578, norm_power: data_points[228], }, { wavelength: 579, norm_power: data_points[229], }, { wavelength: 580, norm_power: data_points[230], }, { wavelength: 581, norm_power: data_points[231], }, { wavelength: 582, norm_power: data_points[232], }, { wavelength: 583, norm_power: data_points[233], }, { wavelength: 584, norm_power: data_points[234], }, { wavelength: 585, norm_power: data_points[235], }, { wavelength: 586, norm_power: data_points[236], }, { wavelength: 587, norm_power: data_points[237], }, { wavelength: 588, norm_power: data_points[238], }, { wavelength: 589, norm_power: data_points[239], }, { wavelength: 590, norm_power: data_points[240], }, { wavelength: 591, norm_power: data_points[241], }, { wavelength: 592, norm_power: data_points[242], }, { wavelength: 593, norm_power: data_points[243], }, { wavelength: 594, norm_power: data_points[244], }, { wavelength: 595, norm_power: data_points[245], }, { wavelength: 596, norm_power: data_points[246], }, { wavelength: 597, norm_power: data_points[247], }, { wavelength: 598, norm_power: data_points[248], }, { wavelength: 599, norm_power: data_points[249], }, { wavelength: 600, norm_power: data_points[250], }, { wavelength: 601, norm_power: data_points[251], }, { wavelength: 602, norm_power: data_points[252], }, { wavelength: 603, norm_power: data_points[253], }, { wavelength: 604, norm_power: data_points[254], }, { wavelength: 605, norm_power: data_points[255], }, { wavelength: 606, norm_power: data_points[256], }, { wavelength: 607, norm_power: data_points[257], }, { wavelength: 608, norm_power: data_points[258], }, { wavelength: 609, norm_power: data_points[259], }, { wavelength: 610, norm_power: data_points[260], }, { wavelength: 611, norm_power: data_points[261], }, { wavelength: 612, norm_power: data_points[262], }, { wavelength: 613, norm_power: data_points[263], }, { wavelength: 614, norm_power: data_points[264], }, { wavelength: 615, norm_power: data_points[265], }, { wavelength: 616, norm_power: data_points[266], }, { wavelength: 617, norm_power: data_points[267], }, { wavelength: 618, norm_power: data_points[268], }, { wavelength: 619, norm_power: data_points[269], }, { wavelength: 620, norm_power: data_points[270], }, { wavelength: 621, norm_power: data_points[271], }, { wavelength: 622, norm_power: data_points[272], }, { wavelength: 623, norm_power: data_points[273], }, { wavelength: 624, norm_power: data_points[274], }, { wavelength: 625, norm_power: data_points[275], }, { wavelength: 626, norm_power: data_points[276], }, { wavelength: 627, norm_power: data_points[277], }, { wavelength: 628, norm_power: data_points[278], }, { wavelength: 629, norm_power: data_points[279], }, { wavelength: 630, norm_power: data_points[280], }, { wavelength: 631, norm_power: data_points[281], }, { wavelength: 632, norm_power: data_points[282], }, { wavelength: 633, norm_power: data_points[283], }, { wavelength: 634, norm_power: data_points[284], }, { wavelength: 635, norm_power: data_points[285], }, { wavelength: 636, norm_power: data_points[286], }, { wavelength: 637, norm_power: data_points[287], }, { wavelength: 638, norm_power: data_points[288], }, { wavelength: 639, norm_power: data_points[289], }, { wavelength: 640, norm_power: data_points[290], }, { wavelength: 641, norm_power: data_points[291], }, { wavelength: 642, norm_power: data_points[292], }, { wavelength: 643, norm_power: data_points[293], }, { wavelength: 644, norm_power: data_points[294], }, { wavelength: 645, norm_power: data_points[295], }, { wavelength: 646, norm_power: data_points[296], }, { wavelength: 647, norm_power: data_points[297], }, { wavelength: 648, norm_power: data_points[298], }, { wavelength: 649, norm_power: data_points[299], }, { wavelength: 650, norm_power: data_points[300], }, { wavelength: 651, norm_power: data_points[301], }, { wavelength: 652, norm_power: data_points[302], }, { wavelength: 653, norm_power: data_points[303], }, { wavelength: 654, norm_power: data_points[304], }, { wavelength: 655, norm_power: data_points[305], }, { wavelength: 656, norm_power: data_points[306], }, { wavelength: 657, norm_power: data_points[307], }, { wavelength: 658, norm_power: data_points[308], }, { wavelength: 659, norm_power: data_points[309], }, { wavelength: 660, norm_power: data_points[310], }, { wavelength: 661, norm_power: data_points[311], }, { wavelength: 662, norm_power: data_points[312], }, { wavelength: 663, norm_power: data_points[313], }, { wavelength: 664, norm_power: data_points[314], }, { wavelength: 665, norm_power: data_points[315], }, { wavelength: 666, norm_power: data_points[316], }, { wavelength: 667, norm_power: data_points[317], }, { wavelength: 668, norm_power: data_points[318], }, { wavelength: 669, norm_power: data_points[319], }, { wavelength: 670, norm_power: data_points[320], }, { wavelength: 671, norm_power: data_points[321], }, { wavelength: 672, norm_power: data_points[322], }, { wavelength: 673, norm_power: data_points[323], }, { wavelength: 674, norm_power: data_points[324], }, { wavelength: 675, norm_power: data_points[325], }, { wavelength: 676, norm_power: data_points[326], }, { wavelength: 677, norm_power: data_points[327], }, { wavelength: 678, norm_power: data_points[328], }, { wavelength: 679, norm_power: data_points[329], }, { wavelength: 680, norm_power: data_points[330], }, { wavelength: 681, norm_power: data_points[331], }, { wavelength: 682, norm_power: data_points[332], }, { wavelength: 683, norm_power: data_points[333], }, { wavelength: 684, norm_power: data_points[334], }, { wavelength: 685, norm_power: data_points[335], }, { wavelength: 686, norm_power: data_points[336], }, { wavelength: 687, norm_power: data_points[337], }, { wavelength: 688, norm_power: data_points[338], }, { wavelength: 689, norm_power: data_points[339], }, { wavelength: 690, norm_power: data_points[340], }, { wavelength: 691, norm_power: data_points[341], }, { wavelength: 692, norm_power: data_points[342], }, { wavelength: 693, norm_power: data_points[343], }, { wavelength: 694, norm_power: data_points[344], }, { wavelength: 695, norm_power: data_points[345], }, { wavelength: 696, norm_power: data_points[346], }, { wavelength: 697, norm_power: data_points[347], }, { wavelength: 698, norm_power: data_points[348], }, { wavelength: 699, norm_power: data_points[349], }, { wavelength: 700, norm_power: data_points[350], }, { wavelength: 701, norm_power: data_points[351], }, { wavelength: 702, norm_power: data_points[352], }, { wavelength: 703, norm_power: data_points[353], }, { wavelength: 704, norm_power: data_points[354], }, { wavelength: 705, norm_power: data_points[355], }, { wavelength: 706, norm_power: data_points[356], }, { wavelength: 707, norm_power: data_points[357], }, { wavelength: 708, norm_power: data_points[358], }, { wavelength: 709, norm_power: data_points[359], }, { wavelength: 710, norm_power: data_points[360], }, { wavelength: 711, norm_power: data_points[361], }, { wavelength: 712, norm_power: data_points[362], }, { wavelength: 713, norm_power: data_points[363], }, { wavelength: 714, norm_power: data_points[364], }, { wavelength: 715, norm_power: data_points[365], }, { wavelength: 716, norm_power: data_points[366], }, { wavelength: 717, norm_power: data_points[367], }, { wavelength: 718, norm_power: data_points[368], }, { wavelength: 719, norm_power: data_points[369], }, { wavelength: 720, norm_power: data_points[370], }, { wavelength: 721, norm_power: data_points[371], }, { wavelength: 722, norm_power: data_points[372], }, { wavelength: 723, norm_power: data_points[373], }, { wavelength: 724, norm_power: data_points[374], }, { wavelength: 725, norm_power: data_points[375], }, { wavelength: 726, norm_power: data_points[376], }, { wavelength: 727, norm_power: data_points[377], }, { wavelength: 728, norm_power: data_points[378], }, { wavelength: 729, norm_power: data_points[379], }, { wavelength: 730, norm_power: data_points[380], }, { wavelength: 731, norm_power: data_points[381], }, { wavelength: 732, norm_power: data_points[382], }, { wavelength: 733, norm_power: data_points[383], }, { wavelength: 734, norm_power: data_points[384], }, { wavelength: 735, norm_power: data_points[385], }, { wavelength: 736, norm_power: data_points[386], }, { wavelength: 737, norm_power: data_points[387], }, { wavelength: 738, norm_power: data_points[388], }, { wavelength: 739, norm_power: data_points[389], }, { wavelength: 740, norm_power: data_points[390], }, { wavelength: 741, norm_power: data_points[391], }, { wavelength: 742, norm_power: data_points[392], }, { wavelength: 743, norm_power: data_points[393], }, { wavelength: 744, norm_power: data_points[394], }, { wavelength: 745, norm_power: data_points[395], }, { wavelength: 746, norm_power: data_points[396], }, { wavelength: 747, norm_power: data_points[397], }, { wavelength: 748, norm_power: data_points[398], }, { wavelength: 749, norm_power: data_points[399], }, { wavelength: 750, norm_power: data_points[400], }, { wavelength: 751, norm_power: data_points[401], }, { wavelength: 752, norm_power: data_points[402], }, { wavelength: 753, norm_power: data_points[403], }, { wavelength: 754, norm_power: data_points[404], }, { wavelength: 755, norm_power: data_points[405], }, { wavelength: 756, norm_power: data_points[406], }, { wavelength: 757, norm_power: data_points[407], }, { wavelength: 758, norm_power: data_points[408], }, { wavelength: 759, norm_power: data_points[409], }, { wavelength: 760, norm_power: data_points[410], }, { wavelength: 761, norm_power: data_points[411], }, { wavelength: 762, norm_power: data_points[412], }, { wavelength: 763, norm_power: data_points[413], }, { wavelength: 764, norm_power: data_points[414], }, { wavelength: 765, norm_power: data_points[415], }, { wavelength: 766, norm_power: data_points[416], }, { wavelength: 767, norm_power: data_points[417], }, { wavelength: 768, norm_power: data_points[418], }, { wavelength: 769, norm_power: data_points[419], }, { wavelength: 770, norm_power: data_points[420], }, { wavelength: 771, norm_power: data_points[421], }, { wavelength: 772, norm_power: data_points[422], }, { wavelength: 773, norm_power: data_points[423], }, { wavelength: 774, norm_power: data_points[424], }, { wavelength: 775, norm_power: data_points[425], }, { wavelength: 776, norm_power: data_points[426], }, { wavelength: 777, norm_power: data_points[427], }, { wavelength: 778, norm_power: data_points[428], }, { wavelength: 779, norm_power: data_points[429], }, { wavelength: 780, norm_power: data_points[430], }, { wavelength: 781, norm_power: data_points[431], }, { wavelength: 782, norm_power: data_points[432], }, { wavelength: 783, norm_power: data_points[433], }, { wavelength: 784, norm_power: data_points[434], }, { wavelength: 785, norm_power: data_points[435], }, { wavelength: 786, norm_power: data_points[436], }, { wavelength: 787, norm_power: data_points[437], }, { wavelength: 788, norm_power: data_points[438], }, { wavelength: 789, norm_power: data_points[439], }, { wavelength: 790, norm_power: data_points[440], }, { wavelength: 791, norm_power: data_points[441], }, { wavelength: 792, norm_power: data_points[442], }, { wavelength: 793, norm_power: data_points[443], }, { wavelength: 794, norm_power: data_points[444], }, { wavelength: 795, norm_power: data_points[445], }, { wavelength: 796, norm_power: data_points[446], }, { wavelength: 797, norm_power: data_points[447], }, { wavelength: 798, norm_power: data_points[448], }, { wavelength: 799, norm_power: data_points[449], }, { wavelength: 800, norm_power: data_points[450], }, 
]; 


/*
full_graph_data={[
        ['Wavelength (nm)', 'Normalized Power'],
        ['350', data[0]],['351', data[1]],['352', data[2]],[ '353', data[3]],[ '354', data[4]],[ '355', data[5]],[ '356', data[6]],[ '357', data[7]],[ '358', data[8]],[ '359', data[9]],[ '360', data[10]],
        [ '361', data[11]],[ '362', data[12]],[ '363', data[13]],[ '364', data[14]],[ '365', data[15]],[ '366', data[16]],[ '367', data[17]],[ '368', data[18]],[ '369', data[19]],[ '370', data[20]],
        [ '371', data[21]],[ '372', data[22]],[ '373', data[23]],[ '374', data[24]],[ '375', data[25]],[ '376', data[26]],[ '377', data[27]],[ '378', data[28]],[ '379', data[29]],[ '380', data[30]],
        [ '381', data[31]],[ '382', data[32]],[ '383', data[33]],[ '384', data[34]],[ '385', data[35]],[ '386', data[36]],[ '387', data[37]],[ '388', data[38]],[ '389', data[39]],[ '390', data[40]],
        [ '391', data[41]],[ '392', data[42]],[ '393', data[43]],[ '394', data[44]],[ '395', data[45]],[ '396', data[46]],[ '397', data[47]],[ '398', data[48]],[ '399', data[49]],[ '400', data[50]],
        [ '401', data[51]],[ '402', data[52]],[ '403', data[53]],[ '404', data[54]],[ '405', data[55]],[ '406', data[56]],[ '407', data[57]],[ '408', data[58]],[ '409', data[59]],[ '410', data[60]],
        [ '411', data[61]],[ '412', data[62]],[ '413', data[63]],[ '414', data[64]],[ '415', data[65]],[ '416', data[66]],[ '417', data[67]],[ '418', data[68]],[ '419', data[69]],[ '420', data[70]],
        [ '421', data[71]],[ '422', data[72]],[ '423', data[73]],[ '424', data[74]],[ '425', data[75]],[ '426', data[76]],[ '427', data[77]],[ '428', data[78]],[ '429', data[79]],[ '430', data[80]],
        [ '431', data[81]],[ '432', data[82]],[ '433', data[83]],[ '434', data[84]],[ '435', data[85]],[ '436', data[86]],[ '437', data[87]],[ '438', data[88]],[ '439', data[89]],[ '440', data[90]],
        [ '441', data[91]],[ '442', data[92]],[ '443', data[93]],[ '444', data[94]],[ '445', data[95]],[ '446', data[96]],[ '447', data[97]],[ '448', data[98]],[ '449', data[99]],[ '450', data[100]],
        [ '451', data[101]],[ '452', data[102]],[ '453', data[103]],[ '454', data[104]],[ '455', data[105]],[ '456', data[106]],[ '457', data[107]],[ '458', data[108]],[ '459', data[109]],[ '460', data[110]],
        [ '461', data[111]],[ '462', data[112]],[ '463', data[113]],[ '464', data[114]],[ '465', data[115]],[ '466', data[116]],[ '467', data[117]],[ '468', data[118]],[ '469', data[119]],[ '470', data[120]],
        [ '471', data[121]],[ '472', data[122]],[ '473', data[123]],[ '474', data[124]],[ '475', data[125]],[ '476', data[126]],[ '477', data[127]],[ '478', data[128]],[ '479', data[129]],[ '480', data[130]],
        [ '481', data[131]],[ '482', data[132]],[ '483', data[133]],[ '484', data[134]],[ '485', data[135]],[ '486', data[136]],[ '487', data[137]],[ '488', data[138]],[ '489', data[139]],[ '490', data[140]],
        [ '491', data[141]],[ '492', data[142]],[ '493', data[143]],[ '494', data[144]],[ '495', data[145]],[ '496', data[146]],[ '497', data[147]],[ '498', data[148]],[ '499', data[149]],[ '500', data[150]],
        [ '501', data[151]],[ '502', data[152]],[ '503', data[153]],[ '504', data[154]],[ '505', data[155]],[ '506', data[156]],[ '507', data[157]],[ '508', data[158]],[ '509', data[159]],[ '510', data[160]],
        [ '511', data[161]],[ '512', data[162]],[ '513', data[163]],[ '514', data[164]],[ '515', data[165]],[ '516', data[166]],[ '517', data[167]],[ '518', data[168]],[ '519', data[169]],[ '520', data[170]],
        [ '521', data[171]],[ '522', data[172]],[ '523', data[173]],[ '524', data[174]],[ '525', data[175]],[ '526', data[176]],[ '527', data[177]],[ '528', data[178]],[ '529', data[179]],[ '530', data[180]],
        [ '531', data[181]],[ '532', data[182]],[ '533', data[183]],[ '534', data[184]],[ '535', data[185]],[ '536', data[186]],[ '537', data[187]],[ '538', data[188]],[ '539', data[189]],[ '540', data[190]],
        [ '541', data[191]],[ '542', data[192]],[ '543', data[193]],[ '544', data[194]],[ '545', data[195]],[ '546', data[196]],[ '547', data[197]],[ '548', data[198]],[ '549', data[199]],[ '550', data[200]],
        [ '551', data[201]],[ '552', data[202]],[ '553', data[203]],[ '554', data[204]],[ '555', data[205]],[ '556', data[206]],[ '557', data[207]],[ '558', data[208]],[ '559', data[209]],[ '560', data[210]],
        [ '561', data[211]],[ '562', data[212]],[ '563', data[213]],[ '564', data[214]],[ '565', data[215]],[ '566', data[216]],[ '567', data[217]],[ '568', data[218]],[ '569', data[219]],[ '570', data[220]],
        [ '571', data[221]],[ '572', data[222]],[ '573', data[223]],[ '574', data[224]],[ '575', data[225]],[ '576', data[226]],[ '577', data[227]],[ '578', data[228]],[ '579', data[229]],[ '580', data[230]],
        [ '581', data[231]],[ '582', data[232]],[ '583', data[233]],[ '584', data[234]],[ '585', data[235]],[ '586', data[236]],[ '587', data[237]],[ '588', data[238]],[ '589', data[239]],[ '590', data[240]],
        [ '591', data[241]],[ '592', data[242]],[ '593', data[243]],[ '594', data[244]],[ '595', data[245]],[ '596', data[246]],[ '597', data[247]],[ '598', data[248]],[ '599', data[249]],[ '600', data[250]],
        [ '601', data[251]],[ '602', data[252]],[ '603', data[253]],[ '604', data[254]],[ '605', data[255]],[ '606', data[256]],[ '607', data[257]],[ '608', data[258]],[ '609', data[259]],[ '610', data[260]],
        [ '611', data[261]],[ '612', data[262]],[ '613', data[263]],[ '614', data[264]],[ '615', data[265]],[ '616', data[266]],[ '617', data[267]],[ '618', data[268]],[ '619', data[269]],[ '620', data[270]],
        [ '621', data[271]],[ '622', data[272]],[ '623', data[273]],[ '624', data[274]],[ '625', data[275]],[ '626', data[276]],[ '627', data[277]],[ '628', data[278]],[ '629', data[279]],[ '630', data[280]],
        [ '631', data[281]],[ '632', data[282]],[ '633', data[283]],[ '634', data[284]],[ '635', data[285]],[ '636', data[286]],[ '637', data[287]],[ '638', data[288]],[ '639', data[289]],[ '640', data[290]],
        [ '641', data[291]],[ '642', data[292]],[ '643', data[293]],[ '644', data[294]],[ '645', data[295]],[ '646', data[296]],[ '647', data[297]],[ '648', data[298]],[ '649', data[299]],[ '650', data[300]],
        [ '651', data[301]],[ '652', data[302]],[ '653', data[303]],[ '654', data[304]],[ '655', data[305]],[ '656', data[306]],[ '657', data[307]],[ '658', data[308]],[ '659', data[309]],[ '660', data[310]],
        [ '661', data[311]],[ '662', data[312]],[ '663', data[313]],[ '664', data[314]],[ '665', data[315]],[ '666', data[316]],[ '667', data[317]],[ '668', data[318]],[ '669', data[319]],[ '670', data[320]],
        [ '671', data[321]],[ '672', data[322]],[ '673', data[323]],[ '674', data[324]],[ '675', data[325]],[ '676', data[326]],[ '677', data[327]],[ '678', data[328]],[ '679', data[329]],[ '680', data[330]],
        [ '681', data[331]],[ '682', data[332]],[ '683', data[333]],[ '684', data[334]],[ '685', data[335]],[ '686', data[336]],[ '687', data[337]],[ '688', data[338]],[ '689', data[339]],[ '690', data[340]],
        [ '691', data[341]],[ '692', data[342]],[ '693', data[343]],[ '694', data[344]],[ '695', data[345]],[ '696', data[346]],[ '697', data[347]],[ '698', data[348]],[ '699', data[349]],[ '700', data[350]],
        [ '701', data[351]],[ '702', data[352]],[ '703', data[353]],[ '704', data[354]],[ '705', data[355]],[ '706', data[356]],[ '707', data[357]],[ '708', data[358]],[ '709', data[359]],[ '710', data[360]],
        [ '711', data[361]],[ '712', data[362]],[ '713', data[363]],[ '714', data[364]],[ '715', data[365]],[ '716', data[366]],[ '717', data[367]],[ '718', data[368]],[ '719', data[369]],[ '720', data[370]],
        [ '721', data[371]],[ '722', data[372]],[ '723', data[373]],[ '724', data[374]],[ '725', data[375]],[ '726', data[376]],[ '727', data[377]],[ '728', data[378]],[ '729', data[379]],[ '730', data[380]],
        [ '731', data[381]],[ '732', data[382]],[ '733', data[383]],[ '734', data[384]],[ '735', data[385]],[ '736', data[386]],[ '737', data[387]],[ '738', data[388]],[ '739', data[389]],[ '740', data[390]],
        [ '741', data[391]],[ '742', data[392]],[ '743', data[393]],[ '744', data[394]],[ '745', data[395]],[ '746', data[396]],[ '747', data[397]],[ '748', data[398]],[ '749', data[399]],[ '750', data[400]],
        [ '751', data[401]],[ '752', data[402]],[ '753', data[403]],[ '754', data[404]],[ '755', data[405]],[ '756', data[406]],[ '757', data[407]],[ '758', data[408]],[ '759', data[409]],[ '760', data[410]],
        [ '761', data[411]],[ '762', data[412]],[ '763', data[413]],[ '764', data[414]],[ '765', data[415]],[ '766', data[416]],[ '767', data[417]],[ '768', data[418]],[ '769', data[419]],[ '770', data[420]],
        [ '771', data[421]],[ '772', data[422]],[ '773', data[423]],[ '774', data[424]],[ '775', data[425]],[ '776', data[426]],[ '777', data[427]],[ '778', data[428]],[ '779', data[429]],[ '780', data[430]],
        [ '781', data[431]],[ '782', data[432]],[ '783', data[433]],[ '784', data[434]],[ '785', data[435]],[ '786', data[436]],[ '787', data[437]],[ '788', data[438]],[ '789', data[439]],[ '790', data[440]],
        [ '791', data[441]],[ '792', data[442]],[ '793', data[443]],[ '794', data[444]],[ '795', data[445]],[ '796', data[446]],[ '797', data[447]],[ '798', data[448]],[ '799', data[449]],[ '800', data[450]]
        ]}
*/ 

//450 data plots to point on x and y axis



export default class Instrument_Graph_v1 extends React.Component {
    render() {
      return (
        <div>
          Test Graphs
        
        Initial Default Example Graph:
        <LineChart
        width={500}
        height={300}
        data={data_graph1}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>

        Modified Graph:
        <AreaChart
        width={500}
        height={400}
        data={data_graph2}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#d91414" fill="#d91414" />
        </AreaChart>
      

    

       CURRENT WORKING GRAPH: 
       <AreaChart
       width={500}
       height={400}
       data={data_graph4}
       margin={{
         top: 10, right: 30, left: 0, bottom: 0,
       }}
      > 

      <defs> 
        <linearGradient id="norm_power_id" x1="0" y1="0" x2="0" y2="1">
      <stop offset=".006%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset=".008%" stopColor="#8884d8" stopOpacity={0}/>

      {/* <stop offset={.01} stopColor="green" stopOpacity={1}/>
            <stop offset={.3} stopColor="red" stopOpacity={1}/> */}
    </linearGradient>
    </defs>

       <CartesianGrid strokeDasharray="3 3" />
       <XAxis 
        dataKey="wavelength" 
        ticks={[350, 380, 450, 495, 570, 590, 620, 750]} />
       <YAxis 
          /*type="number" */ 
          /*domain={[0, .001]} 
          ticks={[0, .001]}*/ />
        {/* <Area type="monotone" dataKey="norm_power" stroke="#8884d8" fill="url(#norm_power_id)" /> */}
        {/* <Area type="monotone" dataKey="norm_power" stroke="#8884d8" fill="#d91414" /> */}

        <Area type="monotone" dataKey="norm_power" stroke="#d91414" fill="#d91414" />



       <Tooltip />

       
       </AreaChart>

       

       






       </div>
        

      );
    }
  }



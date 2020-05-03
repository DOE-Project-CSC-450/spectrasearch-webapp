import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Login from './Login'
import Uploadpage from './uploadpage'
import InstProf from './Instrument_Profile'
import { Button, Popup, Container, Modal, Message, Form, TextArea, Label, List, Menu, Input, Segment, Divider, Search, Grid, Header, Icon, Dropdown, Image, GridColumn, FormGroup } from 'semantic-ui-react';
import { uptime } from 'os';
import { thisTypeAnnotation } from '@babel/types';
import Searching from './Search'
import {Link} from 'react-router-dom';
import Graph from './graph';
import {
    LineChart, Line, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid, Brush, Legend,
  } from 'recharts';
  
var graphNumber0;
var graphNumber450;
var graphNumber;
var actualGraphQuick;
export default class SpectralData extends Component {
    constructor(props) {
        super(props);
        this.state = {activeItem: ''};
        this.state = {QuickSpectralNumbers: []}
        this.state = {quickFlag: false}
     
      }

      handleItemClick = (e, { name }) => this.setState({ activeItem: name })

      handleQucikSubmitRefresh =()=>{
        window.location.reload();
      }

      handleQucikSubmit = () =>{
          this.setState({quickFlag: true});
          graphNumber =  this.state.QuickSpectralNumbers.split(',');
          graphNumber0 = Number(graphNumber[0].replace('[', ''));
          graphNumber450 = Number(graphNumber[450].replace(']', ''));

          actualGraphQuick =
          [
            { wavelength: 350, norm_power: graphNumber0, }, { wavelength: 351, norm_power: graphNumber[1], }, { wavelength: 352, norm_power: graphNumber[2], }, { wavelength: 353, norm_power: graphNumber[3], }, { wavelength: 354, norm_power: graphNumber[4], }, { wavelength: 355, norm_power: graphNumber[5], }, { wavelength: 356, norm_power: graphNumber[6], }, { wavelength: 357, norm_power: graphNumber[7], }, { wavelength: 358, norm_power: graphNumber[8], }, { wavelength: 359, norm_power: graphNumber[9], }, { wavelength: 360, norm_power: graphNumber[10], }, { wavelength: 361, norm_power: graphNumber[11], }, { wavelength: 362, norm_power: graphNumber[12], }, { wavelength: 363, norm_power: graphNumber[13], }, { wavelength: 364, norm_power: graphNumber[14], }, { wavelength: 365, norm_power: graphNumber[15], }, { wavelength: 366, norm_power: graphNumber[16], }, { wavelength: 367, norm_power: graphNumber[17], }, { wavelength: 368, norm_power: graphNumber[18], }, { wavelength: 369, norm_power: graphNumber[19], }, { wavelength: 370, norm_power: graphNumber[20], }, { wavelength: 371, norm_power: graphNumber[21], }, { wavelength: 372, norm_power: graphNumber[22], }, { wavelength: 373, norm_power: graphNumber[23], }, { wavelength: 374, norm_power: graphNumber[24], }, { wavelength: 375, norm_power: graphNumber[25], }, { wavelength: 376, norm_power: graphNumber[26], }, { wavelength: 377, norm_power: graphNumber[27], }, { wavelength: 378, norm_power: graphNumber[28], }, { wavelength: 379, norm_power: graphNumber[29], }, { wavelength: 380, norm_power: graphNumber[30], }, { wavelength: 381, norm_power: graphNumber[31], }, { wavelength: 382, norm_power: graphNumber[32], }, { wavelength: 383, norm_power: graphNumber[33], }, { wavelength: 384, norm_power: graphNumber[34], }, { wavelength: 385, norm_power: graphNumber[35], }, { wavelength: 386, norm_power: graphNumber[36], }, { wavelength: 387, norm_power: graphNumber[37], }, { wavelength: 388, norm_power: graphNumber[38], }, { wavelength: 389, norm_power: graphNumber[39], }, { wavelength: 390, norm_power: graphNumber[40], }, { wavelength: 391, norm_power: graphNumber[41], }, { wavelength: 392, norm_power: graphNumber[42], }, { wavelength: 393, norm_power: graphNumber[43], }, { wavelength: 394, norm_power: graphNumber[44], }, { wavelength: 395, norm_power: graphNumber[45], }, { wavelength: 396, norm_power: graphNumber[46], }, { wavelength: 397, norm_power: graphNumber[47], }, { wavelength: 398, norm_power: graphNumber[48], }, { wavelength: 399, norm_power: graphNumber[49], }, { wavelength: 400, norm_power: graphNumber[50], }, { wavelength: 401, norm_power: graphNumber[51], }, { wavelength: 402, norm_power: graphNumber[52], }, { wavelength: 403, norm_power: graphNumber[53], }, { wavelength: 404, norm_power: graphNumber[54], }, { wavelength: 405, norm_power: graphNumber[55], }, { wavelength: 406, norm_power: graphNumber[56], }, { wavelength: 407, norm_power: graphNumber[57], }, { wavelength: 408, norm_power: graphNumber[58], }, { wavelength: 409, norm_power: graphNumber[59], }, { wavelength: 410, norm_power: graphNumber[60], }, { wavelength: 411, norm_power: graphNumber[61], }, { wavelength: 412, norm_power: graphNumber[62], }, { wavelength: 413, norm_power: graphNumber[63], }, { wavelength: 414, norm_power: graphNumber[64], }, { wavelength: 415, norm_power: graphNumber[65], }, { wavelength: 416, norm_power: graphNumber[66], }, { wavelength: 417, norm_power: graphNumber[67], }, { wavelength: 418, norm_power: graphNumber[68], }, { wavelength: 419, norm_power: graphNumber[69], }, { wavelength: 420, norm_power: graphNumber[70], }, { wavelength: 421, norm_power: graphNumber[71], }, { wavelength: 422, norm_power: graphNumber[72], }, { wavelength: 423, norm_power: graphNumber[73], }, { wavelength: 424, norm_power: graphNumber[74], }, { wavelength: 425, norm_power: graphNumber[75], }, { wavelength: 426, norm_power: graphNumber[76], }, { wavelength: 427, norm_power: graphNumber[77], }, { wavelength: 428, norm_power: graphNumber[78], }, { wavelength: 429, norm_power: graphNumber[79], }, { wavelength: 430, norm_power: graphNumber[80], }, { wavelength: 431, norm_power: graphNumber[81], }, { wavelength: 432, norm_power: graphNumber[82], }, { wavelength: 433, norm_power: graphNumber[83], }, { wavelength: 434, norm_power: graphNumber[84], }, { wavelength: 435, norm_power: graphNumber[85], }, { wavelength: 436, norm_power: graphNumber[86], }, { wavelength: 437, norm_power: graphNumber[87], }, { wavelength: 438, norm_power: graphNumber[88], }, { wavelength: 439, norm_power: graphNumber[89], }, { wavelength: 440, norm_power: graphNumber[90], }, { wavelength: 441, norm_power: graphNumber[91], }, { wavelength: 442, norm_power: graphNumber[92], }, { wavelength: 443, norm_power: graphNumber[93], }, { wavelength: 444, norm_power: graphNumber[94], }, { wavelength: 445, norm_power: graphNumber[95], }, { wavelength: 446, norm_power: graphNumber[96], }, { wavelength: 447, norm_power: graphNumber[97], }, { wavelength: 448, norm_power: graphNumber[98], }, { wavelength: 449, norm_power: graphNumber[99], }, { wavelength: 450, norm_power: graphNumber[100], }, { wavelength: 451, norm_power: graphNumber[101], }, { wavelength: 452, norm_power: graphNumber[102], }, { wavelength: 453, norm_power: graphNumber[103], }, { wavelength: 454, norm_power: graphNumber[104], }, { wavelength: 455, norm_power: graphNumber[105], }, { wavelength: 456, norm_power: graphNumber[106], }, { wavelength: 457, norm_power: graphNumber[107], }, { wavelength: 458, norm_power: graphNumber[108], }, { wavelength: 459, norm_power: graphNumber[109], }, { wavelength: 460, norm_power: graphNumber[110], }, { wavelength: 461, norm_power: graphNumber[111], }, { wavelength: 462, norm_power: graphNumber[112], }, { wavelength: 463, norm_power: graphNumber[113], }, { wavelength: 464, norm_power: graphNumber[114], }, { wavelength: 465, norm_power: graphNumber[115], }, { wavelength: 466, norm_power: graphNumber[116], }, { wavelength: 467, norm_power: graphNumber[117], }, { wavelength: 468, norm_power: graphNumber[118], }, { wavelength: 469, norm_power: graphNumber[119], }, { wavelength: 470, norm_power: graphNumber[120], }, { wavelength: 471, norm_power: graphNumber[121], }, { wavelength: 472, norm_power: graphNumber[122], }, { wavelength: 473, norm_power: graphNumber[123], }, { wavelength: 474, norm_power: graphNumber[124], }, { wavelength: 475, norm_power: graphNumber[125], }, { wavelength: 476, norm_power: graphNumber[126], }, { wavelength: 477, norm_power: graphNumber[127], }, { wavelength: 478, norm_power: graphNumber[128], }, { wavelength: 479, norm_power: graphNumber[129], }, { wavelength: 480, norm_power: graphNumber[130], }, { wavelength: 481, norm_power: graphNumber[131], }, { wavelength: 482, norm_power: graphNumber[132], }, { wavelength: 483, norm_power: graphNumber[133], }, { wavelength: 484, norm_power: graphNumber[134], }, { wavelength: 485, norm_power: graphNumber[135], }, { wavelength: 486, norm_power: graphNumber[136], }, { wavelength: 487, norm_power: graphNumber[137], }, { wavelength: 488, norm_power: graphNumber[138], }, { wavelength: 489, norm_power: graphNumber[139], }, { wavelength: 490, norm_power: graphNumber[140], }, { wavelength: 491, norm_power: graphNumber[141], }, { wavelength: 492, norm_power: graphNumber[142], }, { wavelength: 493, norm_power: graphNumber[143], }, { wavelength: 494, norm_power: graphNumber[144], }, { wavelength: 495, norm_power: graphNumber[145], }, { wavelength: 496, norm_power: graphNumber[146], }, { wavelength: 497, norm_power: graphNumber[147], }, { wavelength: 498, norm_power: graphNumber[148], }, { wavelength: 499, norm_power: graphNumber[149], }, { wavelength: 500, norm_power: graphNumber[150], }, { wavelength: 501, norm_power: graphNumber[151], }, { wavelength: 502, norm_power: graphNumber[152], }, { wavelength: 503, norm_power: graphNumber[153], }, { wavelength: 504, norm_power: graphNumber[154], }, { wavelength: 505, norm_power: graphNumber[155], }, { wavelength: 506, norm_power: graphNumber[156], }, { wavelength: 507, norm_power: graphNumber[157], }, { wavelength: 508, norm_power: graphNumber[158], }, { wavelength: 509, norm_power: graphNumber[159], }, { wavelength: 510, norm_power: graphNumber[160], }, { wavelength: 511, norm_power: graphNumber[161], }, { wavelength: 512, norm_power: graphNumber[162], }, { wavelength: 513, norm_power: graphNumber[163], }, { wavelength: 514, norm_power: graphNumber[164], }, { wavelength: 515, norm_power: graphNumber[165], }, { wavelength: 516, norm_power: graphNumber[166], }, { wavelength: 517, norm_power: graphNumber[167], }, { wavelength: 518, norm_power: graphNumber[168], }, { wavelength: 519, norm_power: graphNumber[169], }, { wavelength: 520, norm_power: graphNumber[170], }, { wavelength: 521, norm_power: graphNumber[171], }, { wavelength: 522, norm_power: graphNumber[172], }, { wavelength: 523, norm_power: graphNumber[173], }, { wavelength: 524, norm_power: graphNumber[174], }, { wavelength: 525, norm_power: graphNumber[175], }, { wavelength: 526, norm_power: graphNumber[176], }, { wavelength: 527, norm_power: graphNumber[177], }, { wavelength: 528, norm_power: graphNumber[178], }, { wavelength: 529, norm_power: graphNumber[179], }, { wavelength: 530, norm_power: graphNumber[180], }, { wavelength: 531, norm_power: graphNumber[181], }, { wavelength: 532, norm_power: graphNumber[182], }, { wavelength: 533, norm_power: graphNumber[183], }, { wavelength: 534, norm_power: graphNumber[184], }, { wavelength: 535, norm_power: graphNumber[185], }, { wavelength: 536, norm_power: graphNumber[186], }, { wavelength: 537, norm_power: graphNumber[187], }, { wavelength: 538, norm_power: graphNumber[188], }, { wavelength: 539, norm_power: graphNumber[189], }, { wavelength: 540, norm_power: graphNumber[190], }, { wavelength: 541, norm_power: graphNumber[191], }, { wavelength: 542, norm_power: graphNumber[192], }, { wavelength: 543, norm_power: graphNumber[193], }, { wavelength: 544, norm_power: graphNumber[194], }, { wavelength: 545, norm_power: graphNumber[195], }, { wavelength: 546, norm_power: graphNumber[196], }, { wavelength: 547, norm_power: graphNumber[197], }, { wavelength: 548, norm_power: graphNumber[198], }, { wavelength: 549, norm_power: graphNumber[199], }, { wavelength: 550, norm_power: graphNumber[200], }, { wavelength: 551, norm_power: graphNumber[201], }, { wavelength: 552, norm_power: graphNumber[202], }, { wavelength: 553, norm_power: graphNumber[203], }, { wavelength: 554, norm_power: graphNumber[204], }, { wavelength: 555, norm_power: graphNumber[205], }, { wavelength: 556, norm_power: graphNumber[206], }, { wavelength: 557, norm_power: graphNumber[207], }, { wavelength: 558, norm_power: graphNumber[208], }, { wavelength: 559, norm_power: graphNumber[209], }, { wavelength: 560, norm_power: graphNumber[210], }, { wavelength: 561, norm_power: graphNumber[211], }, { wavelength: 562, norm_power: graphNumber[212], }, { wavelength: 563, norm_power: graphNumber[213], }, { wavelength: 564, norm_power: graphNumber[214], }, { wavelength: 565, norm_power: graphNumber[215], }, { wavelength: 566, norm_power: graphNumber[216], }, { wavelength: 567, norm_power: graphNumber[217], }, { wavelength: 568, norm_power: graphNumber[218], }, { wavelength: 569, norm_power: graphNumber[219], }, { wavelength: 570, norm_power: graphNumber[220], }, { wavelength: 571, norm_power: graphNumber[221], }, { wavelength: 572, norm_power: graphNumber[222], }, { wavelength: 573, norm_power: graphNumber[223], }, { wavelength: 574, norm_power: graphNumber[224], }, { wavelength: 575, norm_power: graphNumber[225], }, { wavelength: 576, norm_power: graphNumber[226], }, { wavelength: 577, norm_power: graphNumber[227], }, { wavelength: 578, norm_power: graphNumber[228], }, { wavelength: 579, norm_power: graphNumber[229], }, { wavelength: 580, norm_power: graphNumber[230], }, { wavelength: 581, norm_power: graphNumber[231], }, { wavelength: 582, norm_power: graphNumber[232], }, { wavelength: 583, norm_power: graphNumber[233], }, { wavelength: 584, norm_power: graphNumber[234], }, { wavelength: 585, norm_power: graphNumber[235], }, { wavelength: 586, norm_power: graphNumber[236], }, { wavelength: 587, norm_power: graphNumber[237], }, { wavelength: 588, norm_power: graphNumber[238], }, { wavelength: 589, norm_power: graphNumber[239], }, { wavelength: 590, norm_power: graphNumber[240], }, { wavelength: 591, norm_power: graphNumber[241], }, { wavelength: 592, norm_power: graphNumber[242], }, { wavelength: 593, norm_power: graphNumber[243], }, { wavelength: 594, norm_power: graphNumber[244], }, { wavelength: 595, norm_power: graphNumber[245], }, { wavelength: 596, norm_power: graphNumber[246], }, { wavelength: 597, norm_power: graphNumber[247], }, { wavelength: 598, norm_power: graphNumber[248], }, { wavelength: 599, norm_power: graphNumber[249], }, { wavelength: 600, norm_power: graphNumber[250], }, { wavelength: 601, norm_power: graphNumber[251], }, { wavelength: 602, norm_power: graphNumber[252], }, { wavelength: 603, norm_power: graphNumber[253], }, { wavelength: 604, norm_power: graphNumber[254], }, { wavelength: 605, norm_power: graphNumber[255], }, { wavelength: 606, norm_power: graphNumber[256], }, { wavelength: 607, norm_power: graphNumber[257], }, { wavelength: 608, norm_power: graphNumber[258], }, { wavelength: 609, norm_power: graphNumber[259], }, { wavelength: 610, norm_power: graphNumber[260], }, { wavelength: 611, norm_power: graphNumber[261], }, { wavelength: 612, norm_power: graphNumber[262], }, { wavelength: 613, norm_power: graphNumber[263], }, { wavelength: 614, norm_power: graphNumber[264], }, { wavelength: 615, norm_power: graphNumber[265], }, { wavelength: 616, norm_power: graphNumber[266], }, { wavelength: 617, norm_power: graphNumber[267], }, { wavelength: 618, norm_power: graphNumber[268], }, { wavelength: 619, norm_power: graphNumber[269], }, { wavelength: 620, norm_power: graphNumber[270], }, { wavelength: 621, norm_power: graphNumber[271], }, { wavelength: 622, norm_power: graphNumber[272], }, { wavelength: 623, norm_power: graphNumber[273], }, { wavelength: 624, norm_power: graphNumber[274], }, { wavelength: 625, norm_power: graphNumber[275], }, { wavelength: 626, norm_power: graphNumber[276], }, { wavelength: 627, norm_power: graphNumber[277], }, { wavelength: 628, norm_power: graphNumber[278], }, { wavelength: 629, norm_power: graphNumber[279], }, { wavelength: 630, norm_power: graphNumber[280], }, { wavelength: 631, norm_power: graphNumber[281], }, { wavelength: 632, norm_power: graphNumber[282], }, { wavelength: 633, norm_power: graphNumber[283], }, { wavelength: 634, norm_power: graphNumber[284], }, { wavelength: 635, norm_power: graphNumber[285], }, { wavelength: 636, norm_power: graphNumber[286], }, { wavelength: 637, norm_power: graphNumber[287], }, { wavelength: 638, norm_power: graphNumber[288], }, { wavelength: 639, norm_power: graphNumber[289], }, { wavelength: 640, norm_power: graphNumber[290], }, { wavelength: 641, norm_power: graphNumber[291], }, { wavelength: 642, norm_power: graphNumber[292], }, { wavelength: 643, norm_power: graphNumber[293], }, { wavelength: 644, norm_power: graphNumber[294], }, { wavelength: 645, norm_power: graphNumber[295], }, { wavelength: 646, norm_power: graphNumber[296], }, { wavelength: 647, norm_power: graphNumber[297], }, { wavelength: 648, norm_power: graphNumber[298], }, { wavelength: 649, norm_power: graphNumber[299], }, { wavelength: 650, norm_power: graphNumber[300], }, { wavelength: 651, norm_power: graphNumber[301], }, { wavelength: 652, norm_power: graphNumber[302], }, { wavelength: 653, norm_power: graphNumber[303], }, { wavelength: 654, norm_power: graphNumber[304], }, { wavelength: 655, norm_power: graphNumber[305], }, { wavelength: 656, norm_power: graphNumber[306], }, { wavelength: 657, norm_power: graphNumber[307], }, { wavelength: 658, norm_power: graphNumber[308], }, { wavelength: 659, norm_power: graphNumber[309], }, { wavelength: 660, norm_power: graphNumber[310], }, { wavelength: 661, norm_power: graphNumber[311], }, { wavelength: 662, norm_power: graphNumber[312], }, { wavelength: 663, norm_power: graphNumber[313], }, { wavelength: 664, norm_power: graphNumber[314], }, { wavelength: 665, norm_power: graphNumber[315], }, { wavelength: 666, norm_power: graphNumber[316], }, { wavelength: 667, norm_power: graphNumber[317], }, { wavelength: 668, norm_power: graphNumber[318], }, { wavelength: 669, norm_power: graphNumber[319], }, { wavelength: 670, norm_power: graphNumber[320], }, { wavelength: 671, norm_power: graphNumber[321], }, { wavelength: 672, norm_power: graphNumber[322], }, { wavelength: 673, norm_power: graphNumber[323], }, { wavelength: 674, norm_power: graphNumber[324], }, { wavelength: 675, norm_power: graphNumber[325], }, { wavelength: 676, norm_power: graphNumber[326], }, { wavelength: 677, norm_power: graphNumber[327], }, { wavelength: 678, norm_power: graphNumber[328], }, { wavelength: 679, norm_power: graphNumber[329], }, { wavelength: 680, norm_power: graphNumber[330], }, { wavelength: 681, norm_power: graphNumber[331], }, { wavelength: 682, norm_power: graphNumber[332], }, { wavelength: 683, norm_power: graphNumber[333], }, { wavelength: 684, norm_power: graphNumber[334], }, { wavelength: 685, norm_power: graphNumber[335], }, { wavelength: 686, norm_power: graphNumber[336], }, { wavelength: 687, norm_power: graphNumber[337], }, { wavelength: 688, norm_power: graphNumber[338], }, { wavelength: 689, norm_power: graphNumber[339], }, { wavelength: 690, norm_power: graphNumber[340], }, { wavelength: 691, norm_power: graphNumber[341], }, { wavelength: 692, norm_power: graphNumber[342], }, { wavelength: 693, norm_power: graphNumber[343], }, { wavelength: 694, norm_power: graphNumber[344], }, { wavelength: 695, norm_power: graphNumber[345], }, { wavelength: 696, norm_power: graphNumber[346], }, { wavelength: 697, norm_power: graphNumber[347], }, { wavelength: 698, norm_power: graphNumber[348], }, { wavelength: 699, norm_power: graphNumber[349], }, { wavelength: 700, norm_power: graphNumber[350], }, { wavelength: 701, norm_power: graphNumber[351], }, { wavelength: 702, norm_power: graphNumber[352], }, { wavelength: 703, norm_power: graphNumber[353], }, { wavelength: 704, norm_power: graphNumber[354], }, { wavelength: 705, norm_power: graphNumber[355], }, { wavelength: 706, norm_power: graphNumber[356], }, { wavelength: 707, norm_power: graphNumber[357], }, { wavelength: 708, norm_power: graphNumber[358], }, { wavelength: 709, norm_power: graphNumber[359], }, { wavelength: 710, norm_power: graphNumber[360], }, { wavelength: 711, norm_power: graphNumber[361], }, { wavelength: 712, norm_power: graphNumber[362], }, { wavelength: 713, norm_power: graphNumber[363], }, { wavelength: 714, norm_power: graphNumber[364], }, { wavelength: 715, norm_power: graphNumber[365], }, { wavelength: 716, norm_power: graphNumber[366], }, { wavelength: 717, norm_power: graphNumber[367], }, { wavelength: 718, norm_power: graphNumber[368], }, { wavelength: 719, norm_power: graphNumber[369], }, { wavelength: 720, norm_power: graphNumber[370], }, { wavelength: 721, norm_power: graphNumber[371], }, { wavelength: 722, norm_power: graphNumber[372], }, { wavelength: 723, norm_power: graphNumber[373], }, { wavelength: 724, norm_power: graphNumber[374], }, { wavelength: 725, norm_power: graphNumber[375], }, { wavelength: 726, norm_power: graphNumber[376], }, { wavelength: 727, norm_power: graphNumber[377], }, { wavelength: 728, norm_power: graphNumber[378], }, { wavelength: 729, norm_power: graphNumber[379], }, { wavelength: 730, norm_power: graphNumber[380], }, { wavelength: 731, norm_power: graphNumber[381], }, { wavelength: 732, norm_power: graphNumber[382], }, { wavelength: 733, norm_power: graphNumber[383], }, { wavelength: 734, norm_power: graphNumber[384], }, { wavelength: 735, norm_power: graphNumber[385], }, { wavelength: 736, norm_power: graphNumber[386], }, { wavelength: 737, norm_power: graphNumber[387], }, { wavelength: 738, norm_power: graphNumber[388], }, { wavelength: 739, norm_power: graphNumber[389], }, { wavelength: 740, norm_power: graphNumber[390], }, { wavelength: 741, norm_power: graphNumber[391], }, { wavelength: 742, norm_power: graphNumber[392], }, { wavelength: 743, norm_power: graphNumber[393], }, { wavelength: 744, norm_power: graphNumber[394], }, { wavelength: 745, norm_power: graphNumber[395], }, { wavelength: 746, norm_power: graphNumber[396], }, { wavelength: 747, norm_power: graphNumber[397], }, { wavelength: 748, norm_power: graphNumber[398], }, { wavelength: 749, norm_power: graphNumber[399], }, { wavelength: 750, norm_power: graphNumber[400], }, { wavelength: 751, norm_power: graphNumber[401], }, { wavelength: 752, norm_power: graphNumber[402], }, { wavelength: 753, norm_power: graphNumber[403], }, { wavelength: 754, norm_power: graphNumber[404], }, { wavelength: 755, norm_power: graphNumber[405], }, { wavelength: 756, norm_power: graphNumber[406], }, { wavelength: 757, norm_power: graphNumber[407], }, { wavelength: 758, norm_power: graphNumber[408], }, { wavelength: 759, norm_power: graphNumber[409], }, { wavelength: 760, norm_power: graphNumber[410], }, { wavelength: 761, norm_power: graphNumber[411], }, { wavelength: 762, norm_power: graphNumber[412], }, { wavelength: 763, norm_power: graphNumber[413], }, { wavelength: 764, norm_power: graphNumber[414], }, { wavelength: 765, norm_power: graphNumber[415], }, { wavelength: 766, norm_power: graphNumber[416], }, { wavelength: 767, norm_power: graphNumber[417], }, { wavelength: 768, norm_power: graphNumber[418], }, { wavelength: 769, norm_power: graphNumber[419], }, { wavelength: 770, norm_power: graphNumber[420], }, { wavelength: 771, norm_power: graphNumber[421], }, { wavelength: 772, norm_power: graphNumber[422], }, { wavelength: 773, norm_power: graphNumber[423], }, { wavelength: 774, norm_power: graphNumber[424], }, { wavelength: 775, norm_power: graphNumber[425], }, { wavelength: 776, norm_power: graphNumber[426], }, { wavelength: 777, norm_power: graphNumber[427], }, { wavelength: 778, norm_power: graphNumber[428], }, { wavelength: 779, norm_power: graphNumber[429], }, { wavelength: 780, norm_power: graphNumber[430], }, { wavelength: 781, norm_power: graphNumber[431], }, { wavelength: 782, norm_power: graphNumber[432], }, { wavelength: 783, norm_power: graphNumber[433], }, { wavelength: 784, norm_power: graphNumber[434], }, { wavelength: 785, norm_power: graphNumber[435], }, { wavelength: 786, norm_power: graphNumber[436], }, { wavelength: 787, norm_power: graphNumber[437], }, { wavelength: 788, norm_power: graphNumber[438], }, { wavelength: 789, norm_power: graphNumber[439], }, { wavelength: 790, norm_power: graphNumber[440], }, { wavelength: 791, norm_power: graphNumber[441], }, { wavelength: 792, norm_power: graphNumber[442], }, { wavelength: 793, norm_power: graphNumber[443], }, { wavelength: 794, norm_power: graphNumber[444], }, { wavelength: 795, norm_power: graphNumber[445], }, { wavelength: 796, norm_power: graphNumber[446], }, { wavelength: 797, norm_power: graphNumber[447], }, { wavelength: 798, norm_power: graphNumber[448], }, { wavelength: 799, norm_power: graphNumber[449], }, { wavelength: 800, norm_power: graphNumber450, },
          ];
          
          var mySVG = document.getElementById('svg');
         
         
      }
      

    render () {
        const { activeItem } = this.state
        return (
            
            <Form id='quickLookupPage'>
                <Header>Spectral Data: Quick SPD Graph Calculator</Header>
                <Popup content='Data values for Spectral Distribution Graph.   i.e. [0.000172174,  0.00019782,  0.000172848,  ...]' trigger={<Button icon='info' size="mini" floated='left' circular={true} compact={true} color="blue" />} />
                <TextArea 
                 rows={2} 
                 maxLength="10000000" 
                 style={{ minHeight: 220 }} 
                 label= "Enter Spectral Data" 
                 placeholder="Enter as comma delimited list inside brackets"
                 onChange={_ = (event) => { this.setState({ QuickSpectralNumbers: event.target.value });}}
                 />
                 
            <br/><br/>
            <Button onClick={this.handleQucikSubmit} floated='left' >Sumbit</Button>
            <Button onClick={this.handleQucikSubmitRefresh} floated='left' >Clear</Button>
            <br/><br/>
            <Divider/>


            {this.state.quickFlag? 
         
             <AreaChart
           
              margin={{ top: 10, right: 30, left: 0, bottom: 0, }}
             width={500}
             height={400}
             data={actualGraphQuick}
            
           >
   
             {console.log(typeof(actualGraphQuick))}
             <defs>
               <linearGradient id="norm_power_id" x1="0" y1="0" x2="0" y2="1">
                 <stop offset=".006%" stopColor="#8884d8" stopOpacity={0.8} />
                 <stop offset=".008%" stopColor="#8884d8" stopOpacity={0} />
               </linearGradient>
   
               <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset=".350" stopColor="#0000FF" />
                 <stop offset=".380" stopColor="#6495ED" />
                 <stop offset=".450" stopColor="#00FFFF" />
                 <stop offset=".495" stopColor="#7FFF00" />
                 <stop offset=".570" stopColor="#ADFF2F" />
                 <stop offset=".590" stopColor="#FFFF00" />
                 <stop offset=".620" stopColor="#FFA500" />
                 <stop offset=".750" stopColor="#FF4500" />
   
               </linearGradient>
             </defs>
   
             <CartesianGrid strokeDasharray="3 3" />
            
            
            
            

             <XAxis 

               dataKey="wavelength"
               ticks={[350, 380, 450, 495, 570, 590, 620, 750]} 
             
               label={{ value: 'INSERT X AXIS LABEL HERE', dy:15, offset:10, position:'insideMiddle'}}
               
               />
               
             <YAxis  label={{ value: 'INSERT Y AXIS LABEL HERE', angle: -90, offset: 10, position: 'insideMiddle' }}/>
             <Area label="monotone" dataKey="norm_power" stroke="#8884d8" fill="url(#colorUv)" />
   
             <Tooltip />
           </AreaChart>
            
            
            : console.log("nothing")}
           

            
            </Form>
            
           
       
            
            
  
           
           

        ) 
    } 
} 
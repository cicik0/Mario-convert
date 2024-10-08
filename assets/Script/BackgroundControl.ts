// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label, Node } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('BackgroundControl')
export default class NewClass extends Component {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
    @property(Node)
    player: Node | null = null;
    
    private offset_x = null;
    private initial_y = null;
   // LIFE-CYCLE CALLBACKS:
    onLoad () {
       // console.log("background loading");
    }
    start () {
       // let player_pos = this.player.getPosition();
       // let current_pos = this.node.getPosition();
       // this.offset_x = player_pos.x - current_pos.x;
       // this.initial_y = current_pos.y;
       // console.log("bg offset: "+this.offset_x+", "+this.offset_y);
    }
    update (dt) {
       // let player_pos = this.player.getPosition();
       // this.node.x = player_pos.x*0.1-500;
       // let target_pos_x = player_pos.x - this.offset_x;
       // target_pos_x = cc.misc.clampf(target_pos_x, 0, Infinity);
       // console.log("target_pos: "+target_pos_x+", "+target_pos_y);
       // this.node.setPosition(cc.v2(target_pos_x, this.initial_y));
    }
}


/**
 * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
 */
// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 
// const {ccclass, property} = cc._decorator;
// 
// @ccclass
// export default class NewClass extends cc.Component {
// 
//     @property(cc.Label)
//     label: cc.Label = null;
// 
//     @property
//     text: string = 'hello';
// 
//     @property(cc.Node)
//     player: cc.Node = null;
//     
//     private offset_x = null;
//     private initial_y = null;
//     // LIFE-CYCLE CALLBACKS:
// 
//     onLoad () {
//         // console.log("background loading");
//     }
// 
//     start () {
//         // let player_pos = this.player.getPosition();
//         // let current_pos = this.node.getPosition();
//         // this.offset_x = player_pos.x - current_pos.x;
//         // this.initial_y = current_pos.y;
//         // console.log("bg offset: "+this.offset_x+", "+this.offset_y);
//     }
// 
//     update (dt) {
//         // let player_pos = this.player.getPosition();
//         // this.node.x = player_pos.x*0.1-500;
//         // let target_pos_x = player_pos.x - this.offset_x;
//         // target_pos_x = cc.misc.clampf(target_pos_x, 0, Infinity);
//         // console.log("target_pos: "+target_pos_x+", "+target_pos_y);
//         // this.node.setPosition(cc.v2(target_pos_x, this.initial_y));
//     }
// }

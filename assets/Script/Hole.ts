// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label } from 'cc';
const {ccclass, property} = _decorator;

@ccclass('Hole')
export default class NewClass extends Component {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
//    // LIFE-CYCLE CALLBACKS:
//    // onLoad () {}
    start () {

    }
//    // update (dt) {}
    onBeginContact(contact, self, other){
        // console.log("hit hole");
        // if(other.node.name == "Player"){
        // other.node.getComponent("Player").hurt();
        // this.scheduleOnce(function(){
        // other.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
        // },3)
        // }
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
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
// 
//     }
// 
//     // update (dt) {}
//     onBeginContact(contact, self, other){
//         console.log("hit hole");
//         if(other.node.name == "Player"){
//             other.node.getComponent("Player").hurt();
//             this.scheduleOnce(function(){
//                 other.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 600);
//             },3)
//         }
//     }
// }

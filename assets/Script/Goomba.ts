// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label, AudioClip, Collider2D, Contact2DType, RigidBody2D, Vec2, Vec3, Animation, IPhysics2DContact, CCFloat } from 'cc';
import { PROGRESSBAR } from '../../extensions/plugin-import-2x/creator/components/ProgressBar';
import { I_changeAnim } from './I_changeAnim';
import Player from './Player';
const {ccclass, property} = _decorator;

@ccclass('Goomba')
export default class NewClass extends Component implements I_changeAnim{
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
    @property
    xLowerBound: number;
    @property
    xUpperBound: number;;
    @property(AudioClip)
    hitAudio: AudioClip | null = null;

    @property({
        type: CCFloat
    })
    limitBound: number|null;

    @property({
        type: Animation
    })
    anim: Animation|null = null;

    @property({
        type: RigidBody2D
    })
    enemyRb:RigidBody2D|null = null;

    private speed:number = 5;
    private moveDir: number =1;
    private currentAnim: string|null  = null;
//    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        let collider = this.node.getComponent(Collider2D);
        if(collider){
                collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        
        this.xLowerBound = this.node.getPosition().x - this.limitBound;
        this.xUpperBound = this.node.getPosition().x + this.limitBound;
    }

    ondestroy(){
        let collider = this.node.getComponent(Collider2D);
        if(collider){
                collider.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }
    start () {
        // console.log("goomba start");
        this.currentAnim = 'GoombaMove';
        this.changeAnim(this.currentAnim);
    }
    update (dt) {
//        // console.log(this.node.getPosition());
        // let current_speed = this.node.getComponent(RigidBody2D).linearVelocity;
        // this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.speed*this.moveDir, current_speed.y);
        // this.node.scaleX = (this.moveDir >= 0) ? -2 : 2;
        console.info(this.moveDir);
        this.enemyRb!.linearVelocity = new Vec2(this.speed * this.moveDir, this.enemyRb.linearVelocity.y);

        const newScale = new Vec3((this.moveDir >= 0) ? -2 : 2, this.node.getScale().y, this.node.getScale().z);
        this.node.setScale(newScale);

        if(this.node.getPosition().x <= this.xLowerBound) this.moveDir = 1;
        else if(this.node.getPosition().x >= this.xUpperBound) this.moveDir = -1;
    }

    changeAnim(animName: string){
        const checkAnim = this.anim.getState(this.currentAnim).isPlaying;
        if(checkAnim != false){
                this.anim.getState(this.currentAnim).stop;               
        } 
        this.currentAnim = animName;
        if(!this.anim.getState(this.currentAnim).isPlaying){
                this.anim.play(animName);    
        }
    }

    onBeginContact(self: Collider2D, other:Collider2D, contact: IPhysics2DContact){
        console.log("Goomba hit "+other.node.name);
        let directorCollier = contact.getWorldManifold().normal;
        // if(other.node.name == "Player"){
        // if(normal.y > 0) {
        //        // console.log("goomba hit from above");
        //        // this.die();
        // cc.audioEngine.playEffect(this.hitAudio, false);
        // other.node.getComponent("Player").playerJump("Enemy");
        // other.node.getComponent("Player").addScore(200);
        // this.node.getComponent(cc.Animation).play("GoombaHit");
        // this.schedule(function(){
        // this.node.destroy();
        // }, 0.5);
        // }
        // else{
        //        // console.log("Player hurt");
        // other.node.getComponent("Player").hurt();
        // }
        // }

        if(other.node.name == "Player"){
            const otherControll = other.node.getComponent(Player);
            if(directorCollier.y < 0){
                console.error('goomba war knocked out by player');
                if(otherControll){
                    otherControll.addScore(200);
                    otherControll.playerJump('Enemy');
                    this.changeAnim('GoombaHit');
                    if(this.anim.getState(this.currentAnim).isPlaying == false){}
                    setTimeout(() => {
                        this.node.destroy();
                        console.error('Goomba die');
                    },500);
                }
            }else{
                console.info('player hurt');
                otherControll.hurt();
            }
        }
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
//     @property
//     xLowerBound: number = 340;
// 
//     @property
//     xUpperBound: number = 700;
// 
//     @property(cc.AudioClip)
//     hitAudio: cc.AudioClip = null;
// 
//     private speed:number = 150;
//     private moveDir: number =1;
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         console.log("goomba start");
//     }
// 
//     update (dt) {
//         // console.log(this.node.getPosition());
//         let current_speed = this.node.getComponent(cc.RigidBody).linearVelocity;
//         this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.speed*this.moveDir, current_speed.y);
//         this.node.scaleX = (this.moveDir >= 0) ? -2 : 2;
// 
//         if(this.node.x <= this.xLowerBound) this.moveDir = 1;
//         else if(this.node.x >= this.xUpperBound) this.moveDir = -1;
//     }
// 
//     onBeginContact(contact, self, other){
//         // console.log("Goomba hit "+other.node.name);
//         let normal = contact.getWorldManifold().normal;
//         if(other.node.name == "Player"){
//             if(normal.y > 0) {
//                 // console.log("goomba hit from above");
//                 // this.die();
//                 cc.audioEngine.playEffect(this.hitAudio, false);
//                 other.node.getComponent("Player").playerJump("Enemy");
//                 other.node.getComponent("Player").addScore(200);
//                 this.node.getComponent(cc.Animation).play("GoombaHit");
//                 this.schedule(function(){
//                     this.node.destroy();
//                 }, 0.5);
//             }
//             else{
//                 // console.log("Player hurt");
//                 other.node.getComponent("Player").hurt();
//             }
//         }
//     }
// }

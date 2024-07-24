// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Label, Animation, RigidBody2D, Vec2, Vec3, PolygonCollider2D, CircleCollider2D, BoxCollider2D, EventTouch, Collider2D, Contact2DType, IPhysics2DContact, CCFloat } from 'cc';
import { collator } from '../../extensions/plugin-import-2x/creator/common/utlis';
import Player from './Player';
import { I_changeAnim } from './I_changeAnim';
import { LimitVelocityOvertimeModule } from '../../extensions/plugin-import-2x/creator/components/LimitVelocityOvertimeModule';
const {ccclass, property} = _decorator;

@ccclass('Turtle')
export default class NewClass extends Component implements I_changeAnim {
    @property(Label)
    label: Label | null = null;
    @property
    text: string = 'hello';
    @property
    xLowerBound: number; 
    @property
    xUpperBound: number;

    @property({
        type: CCFloat
    })
    limitBound: number|null;

    private turtleSpeed = 5;
    private shellSpeed = 10;
   // private xLowerBound = 340;
   // private xUpperBound = 700;
    private moveDir = 1;

    //private anim = null;
    @property({
        type: Animation
    })
    anim: Animation|null = null;

    //add rigidboy2d
    @property({
        type: RigidBody2D
    })
    enemyRb: RigidBody2D|null = null;

    private currentAnim:string;
     
    private state = "Normal";
   // LIFE-CYCLE CALLBACKS:
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
        //this.anim = this.node.getComponent(Animation);
        this.currentAnim = this.anim.clips[0].name;
        this.changeAnim(this.currentAnim);
    }
    update (dt) {
       // console.log("turtle");
        if(this.state == "Normal"){
           // this.node.x += this.turtleSpeed * this.moveDir * dt;
        //let current_speed = this.node.getComponent(RigidBody2D).linearVelocity
                this.enemyRb!.linearVelocity = new Vec2(this.turtleSpeed * this.moveDir, this.enemyRb!.linearVelocity.y);
                //this.node.getComponent(RigidBody2D).linearVelocity = v2(this.turtleSpeed*this.moveDir, current_speed.y);
                //this.node.scaleX = (this.moveDir >= 0) ? -2 : 2;
                const newScale = new Vec3((this.moveDir >= 0) ? -2 : 2, this.node.getScale().y, this.node.getScale().z);
                this.node.setScale(newScale);

                if(this.node.getPosition().x <= this.xLowerBound) this.moveDir = 1;
                else if(this.node.getPosition().x >= this.xUpperBound) this.moveDir = -1;
        }
        else if(this.state == "Shell"){
                this.enemyRb!.linearVelocity = new Vec2(0,0);
        }
        else if(this.state == "ShellMoving"){
           // this.node.x += this.shellSpeed* this.moveDir * dt;
                //let current_speed = this.node.getComponent(RigidBody2D).linearVelocity
                this.enemyRb!.linearVelocity = new Vec2(this.shellSpeed*this.moveDir, this.enemyRb!.linearVelocity.y);
        }
        //this.playAnimation();
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

    playAnimation(){
        // if(this.state == "Normal"){
        // if(!this.anim.getAnimationState("TurtleMove").isPlaying)
        // this.node.getComponent(Animation).play("TurtleMove");
        // } else if(this.state == "ShellMoving"){
        // if(!this.anim.getAnimationState("TurtleShellMove").isPlaying)
        // this.node.getComponent(Animation).play("TurtleShellMove");
        // }
        
        //console.info(this.state);
        if(this.state == "Normal"){
                // if(this.anim && this.anim.getState('TurtleMove').isPlaying===false){
                //         this.anim.play('TurtleMove');
                //         //console.error('turtle move');
                // }
                //this.anim.play('TurtleMove');
                this.changeAnim('TurtleMove');
        }
        else if(this.state === 'SellMoving'){
                // if(this.anim && this.anim.getState('TurtleShellMove').isPlaying === false){
                //         this.anim.play('TurtleShellMove');
                //         console.error('shell move');
                // }
                this.changeAnim('TurtleShellMove');
        }

    }
    onBeginContact(self:Collider2D, other:Collider2D, contact:IPhysics2DContact){

        console.info(`turtle collier wiht ${other.node.name}`);
        let directorCollier = contact.getWorldManifold().normal;
        if(this.state === "Normal"){
                if(other.node.name == "Player"){
                        const otherControll = other.node.getComponent(Player);
                        if(directorCollier.y < 0){
                                console.error(`turtle war knocked out by ${other.node.name}`);                             
                                if(otherControll){
                                        otherControll.addScore(200);
                                        otherControll.playerJump('Enemy');
                                        if(this.anim && this.anim.getState('TurtleHit').isPlaying === false){
                                                this.anim.play('TurtleHit');
                                                this.state = 'Shell';
                                                this.changeAnim('TurtleHit');
                                                //this.node.getComponent(PolygonCollider2D).enabled = false;
                                                //this.node.getComponent(CircleCollider2D).enabled = true;
                                        }
                                }
                        }
                        else{
                                console.error(`player hurt`);
                                otherControll.hurt();
                        }
                }
        }else if(this.state == "Shell"){
                //console.error('turtule is faint');
                if(other.node.name === "Player"){
                        const otherControll = other.node.getComponent(Player);
                        if(directorCollier.y < 0){
                                console.log('jump on turtelShell');
                                if(directorCollier.x > 0){
                                        this.moveDir = 1
                                        this.state = "ShellMoving";
                                }
                                else if(directorCollier.x < 0){
                                        this.moveDir = -1;
                                        this.state = "ShellMoving";
                                }
                                else{

                                }
                                this.changeAnim('TurtleShellMove');
                                otherControll.addScore(200);
                        }
                        else{
                                otherControll.hurt();
                        }
                }
        }else if(this.state == "ShellMoving"){
                console.error(other.tag);
                if(other.tag == 0){
                        console.info('turtul kill turtle');
                        other.node.destroy();
                }
                else if(other.tag == 3){
                        console.info('turtle collier wall');
                        this.moveDir  = -this.moveDir;
                }else if(other.node.name === "Player"){
                        if(directorCollier.y >= 0){
                                other.node.getComponent(Player).hurt();
                        }
                }
        }
        
       // console.log("Turtle hit "+other.node.name);
//         let normal = contact.getWorldManifold().normal;
//         console.error(`director collier: ${normal}`);
//         if(this.state == "Normal"){
//         if(other.node.name == "Player"){
//         if(normal.y < 0) {
//                 console.error('du ma may, chet mia m chua');
//         other.node.getComponent(Player).addScore(200);

//                    // console.log("Turtle hit from above");
//         other.node.getComponent(Player).playerJump("Enemy");
//         this.anim.play("TurtleHit");
//         this.state = "Shell";

//                    //change collider shape
//         this.node.getComponent(PolygonCollider2D).enabled = false;
//         this.node.getComponent(CircleCollider2D).enabled = true;
//                    // console.log(this.node.getComponent(cc.PhysicsPolygonCollider).enabled,
//                    // this.node.getComponent(cc.PhysicsCircleCollider).enabled)

//         }
//         else{
//                 console.log("Player hurt");
//                 //other.node.getComponent(Player).hurt();
//         }
//         }
//         } else if(this.state == "Shell"){
//         if(other.node.name == "Player"){
//         if(normal.y>0){
//         if(normal.x >0){
//         this.moveDir = -1;
//         this.state = "ShellMoving";
//         } else if(normal.x <0){
//         this.moveDir = 1;
//         this.state = "ShellMoving";
//         } else {

//         }
//         other.node.getComponent(Player).addScore(200);
//         }
//         else{
//         other.node.getComponent(Player).hurt();
//         }
//         }

//         } else if(this.state == "ShellMoving"){
//         if(other.node.getComponent(BoxCollider2D).tag == 0){
//                // console.log("Hit enemy");
//         other.node.destroy();
//         } else if(other.node.getComponent(BoxCollider2D).tag == 3){ //wall
//         this.moveDir *= -1;
//         }
//         else if(other.node.name == "Player"){
//         if(normal.y <=0)
//         other.node.getComponent(Player).hurt();
//         }
//            // else console.log(other.node.getComponent(cc.PhysicsCollider).tag)
//         }
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
//     private turtleSpeed = 150;
//     private shellSpeed = 250;
//     // private xLowerBound = 340;
//     // private xUpperBound = 700;
//     private moveDir = 1;
//     private anim = null;
//     private state = "Normal";
//     // LIFE-CYCLE CALLBACKS:
// 
//     // onLoad () {}
// 
//     start () {
//         this.anim = this.node.getComponent(cc.Animation);
//     }
// 
//     update (dt) {
//         // console.log("turtle");
//         if(this.state == "Normal"){
//             // this.node.x += this.turtleSpeed * this.moveDir * dt;
//             let current_speed = this.node.getComponent(cc.RigidBody).linearVelocity
//             this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.turtleSpeed*this.moveDir, current_speed.y);
//             this.node.scaleX = (this.moveDir >= 0) ? -2 : 2;
// 
//             if(this.node.x <= this.xLowerBound) this.moveDir = 1;
//             else if(this.node.x >= this.xUpperBound) this.moveDir = -1;
//             
//         }
//         else if(this.state == "Shell"){
//             this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,0);
//         }
//         else if(this.state == "ShellMoving"){
//             // this.node.x += this.shellSpeed* this.moveDir * dt;
//             let current_speed = this.node.getComponent(cc.RigidBody).linearVelocity
//             this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.shellSpeed*this.moveDir, current_speed.y);
//         }
//         this.playAnimation();
//     }
//     playAnimation(){
//         if(this.state == "Normal"){
//             if(!this.anim.getAnimationState("TurtleMove").isPlaying)
//                 this.node.getComponent(cc.Animation).play("TurtleMove");
//         } else if(this.state == "ShellMoving"){
//             if(!this.anim.getAnimationState("TurtleShellMove").isPlaying)
//                 this.node.getComponent(cc.Animation).play("TurtleShellMove");
//         }   
//     }
// 
//     onBeginContact(contact, self, other){
//         // console.log("Turtle hit "+other.node.name);
//         let normal = contact.getWorldManifold().normal;
//         if(this.state == "Normal"){
//             if(other.node.name == "Player"){
//                 if(normal.y > 0) {
//                     other.node.getComponent("Player").addScore(200);
// 
//                     // console.log("Turtle hit from above");
//                     other.node.getComponent("Player").playerJump("Enemy");
//                     this.anim.play("TurtleHit");
//                     this.state = "Shell";
// 
//                     //change collider shape
//                     this.node.getComponent(cc.PhysicsPolygonCollider).enabled = false;
//                     this.node.getComponent(cc.PhysicsCircleCollider).enabled = true;
//                     // console.log(this.node.getComponent(cc.PhysicsPolygonCollider).enabled,
//                     // this.node.getComponent(cc.PhysicsCircleCollider).enabled)
// 
//                 }
//                 else{
//                     // console.log("Player hurt");
//                     other.node.getComponent("Player").hurt();
//                 }
//             }
//         } else if(this.state == "Shell"){
//             if(other.node.name == "Player"){
//                 if(normal.y>0){
//                     if(normal.x >0){
//                         this.moveDir = -1;
//                         this.state = "ShellMoving";
//                     } else if(normal.x <0){
//                         this.moveDir = 1;
//                         this.state = "ShellMoving";
//                     } else {
// 
//                     }
//                     other.node.getComponent("Player").addScore(200);
//                 } 
//                 else{
//                     other.node.getComponent("Player").hurt();
//                 }
//             }
//             
//         } else if(this.state == "ShellMoving"){
//             if(other.node.getComponent(cc.PhysicsCollider).tag == 0){
//                 // console.log("Hit enemy");
//                 other.node.destroy();
//             } else if(other.node.getComponent(cc.PhysicsCollider).tag == 3){ //wall
//                 this.moveDir *= -1;
//             }
//             else if(other.node.name == "Player"){
//                 if(normal.y <=0)
//                 other.node.getComponent("Player").hurt();
//             }
//             // else console.log(other.node.getComponent(cc.PhysicsCollider).tag)
//         }
//     }
// }

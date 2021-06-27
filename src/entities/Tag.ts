import {Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn} from "typeorm";
import{v4 as uuid} from "uuid";
@Entity("tag")
 class Tag {
     @PrimaryColumn()
    id : string;
    @Column()
    name : string;
    @Column()
    email : string;
    
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this){
            this.id=uuid();
        }
    }

}


export {Tag};

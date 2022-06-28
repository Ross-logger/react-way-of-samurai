import React from "react";
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems} >
                    <div className={classes.dialog + ' ' + classes.active}>
                        Olivia
                    </div>
                    <div className={classes.dialog}>
                        Milash
                    </div>
                    <div className={classes.dialog}>
                        Joseph
                    </div>
                    <div className={classes.dialog}>
                        Amira
                    </div>
                    <div className={classes.dialog}>
                        Komarik
                    </div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>Hi</div>
                    <div className={classes.message}>How r u brah?</div>
                    <div className={classes.message}>Fyck</div>
                </div>
            </div>
    )
}

export default Dialogs;
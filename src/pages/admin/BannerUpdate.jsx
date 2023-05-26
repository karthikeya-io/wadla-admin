import React from 'react'
import classes from "../../css/BannerUpdate.module.css"
import Welcome from '../../components/admin_components/Welcome'
import Table1 from '../../components/admin_components/Table1'


const BannerUpdate = () => {
    return (
        <div >
            <Welcome />
            <div className={classes.center}>
                <form className={classes.form}>
                    <span className={classes.formTitle}>Upload new Banner</span>
                    <p className={classes.formParagraph}>
                        File should be an image
                    </p>
                    <label htmlFor="file-input" className={classes.dropContainer}>
                        <span className={classes.dropTitle}>Drop files here</span>
                        or
                        <input className={classes.fileINput} type="file" accept="image/*" required="" id="file-input" />
                    </label>
                </form>
            </div>

            <div className={`${classes.Table} table-responsive`}>
                <Table1 />
            </div>
        </div>
    )
}

export default BannerUpdate
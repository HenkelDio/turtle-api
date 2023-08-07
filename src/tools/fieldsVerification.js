
module.exports = (information, modelAttributes) => {
    let error;

    for (let field of Object.keys(modelAttributes)) {
        
        if (!["updatedAt", "createdAt"].includes(field) && !modelAttributes[field].primaryKey) {
            if (!modelAttributes[field].allowNull) {
                if (information[field]) {
                    let { type } = modelAttributes[field];
                    
                    if (type.options.length) {
                        if (information[field].length != type.options.length) {
                            error = `Field ${field} have a wrong length. Expect ${type.options.length} and receive ${information[field].length}`
    
                            return { error }
                        }
                    }
                } else {
                    error = `Field ${field} doesn't exist`
    
                    return { error }
                }
            }
        }
    }

    return { error: undefined }
}
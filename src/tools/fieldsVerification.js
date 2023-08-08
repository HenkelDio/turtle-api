
module.exports = (requisitionType, information, modelAttributes) => {

    Object.keys(information).filter(key => information[key] === undefined || (typeof information[key] === "string" && !information[key])).map(key => { information[key] = undefined });

    let error;

    if (requisitionType === "POST") {
        for (let field of Object.keys(modelAttributes)) {
            if (!["updatedAt", "createdAt"].includes(field) && !modelAttributes[field].primaryKey) {
                if (!modelAttributes[field].allowNull && !!information[field]) {
                    let { type } = modelAttributes[field];

                    if (type.options.length) {
                        if (information[field].length != type.options.length) {
                            error = `Field ${field} have a wrong length. Expect ${type.options.length} and receive ${information[field].length}`

                            return { error }
                        }
                    }
                } else {
                    error = `Field ${field} can't be empty or undefined`;

                    return { error };
                }
            }
        }
    } else if (requisitionType === "PUT") {
        for (let field of Object.keys(information)) {
            if (modelAttributes[field]) {
                if (!modelAttributes[field].allowNull && !!information[field]) {
                    let { type } = modelAttributes[field];
                    if (type.options.length) {
                        if (information[field].length != type.options.length) {
                            error = `Field ${field} have a wrong length of characters. Expect ${type.options.length} and receive ${information[field].length}`

                            return { error }
                        }
                    }
                } else {
                    error = `Field ${field} can't be empty or undefined`;

                    return { error };
                }
            }
        }
    }

    return { error: undefined }
}
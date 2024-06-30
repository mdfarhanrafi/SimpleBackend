import prisma from "../DB/db.config.js";

export const fetchComment = async (req, res) => {
    const comments = await prisma.comment.findMany({})

    return res.json({ status: 200, data: comments });


}

export const showComment = async (req, res) => {

    const commenIdId = req.params.id;
    const Comment = await prisma.comment.findUnique({
        where: {
            id: Number(commenIdId)
        }
    })
    // if (!Post) {
    //     return res.json({
    //         status: 404,
    //         message: "Post not Found!!"
    //     })
    // }
    return res.json({ status: 200, data: Comment })

}


export const createComment = async (req, res) => {
    const { user_id, post_id, comment } = req.body;
    await prisma.post.update({
        where: {
                id:Number(post_id)
        },
        data: {
            comment_count: {
                increment:1
            }
        }

    })
   
    const newcomment = await prisma.comment.create({
        data: {
            user_id: Number(user_id),
            post_id: Number(post_id),
            comment
        }
    })

    return res.json({ status: 200, data: newcomment, message: "comment created" })

}

export const updateComment = async (req, res) => {
    const commenId = req.params.id
    const { user_id, post_id, comment } = req.body;
    await prisma.comment.update({
        where: {
            id: Number(postId)
        },
        data: {
            user_id: Number(user_id),
            post_id: Number(post_id),
            comment
        }

    })
    return res.json({ status: 200, message: "updated successfully" })

}

export const deleteComment = async (req, res) => {
    const commenId = req.params.id
    await prisma.post.update({
        where: {
            id: Number(post_id)
        },
        data: {
            comment_count: {
                decrement: 1
            }
        }

    })
    await prisma.comment.delete({
        where: {
            id: String(commenId)
        }
    })
    return res.json({ status: 200, message: "comment deleted successfully" })
}
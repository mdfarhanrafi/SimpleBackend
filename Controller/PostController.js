import prisma from "../DB/db.config.js";

export const fetchPost = async (req, res) => {
    const posts = await prisma.post.findMany({})

    return res.json({ status: 200, data: posts });


}

export const showPost = async (req, res) => {

    const postId = req.params.id;
    const Post = await prisma.post.findUnique({
        where: {
            id: Number(postId)
        }
    })
    if (!Post) {
        return res.json({
            status: 404,
            message: "Post not Found!!"
        })
    }
    return res.json({ status: 200, data: Post })

}


export const createPost = async (req, res) => {
    const { user_id, title, description } = req.body;


    const newPost = await prisma.post.create({
        data: {
            user_id: Number(user_id),
            title,
            description
        }
    })

    return res.json({ status: 200, data: newPost, message: "Post created" })

}

export const updatePost = async (req, res) => {
    const postId = req.params.id
    const { user_id, title, description } = req.body;
    await prisma.post.update({
        where: {
            id: Number(postId)
        },
        data: {
            user_id: Number(user_id),
            title,
            description

        }

    })
    return res.json({ status: 200, message: "updated successfully" })

}

export const deletePost = async (req, res) => {
    const postId = req.params.id
    await prisma.post.delete({
        where: {
            id: Number(postId)
        }
    })
    return res.json({ status: 200, message: "Post deleted successfully" })
}
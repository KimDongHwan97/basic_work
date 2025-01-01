// 처음에 잘못이해하고 세부로직을 만들었습니다 뒤에는 요청하신 내용으로 작성했습니다!.

//게시글 생성
router.post('/posts', authMiddleware, async (req, res) => {
    try {
        const { userId } = req.user;
        const { title, content } = req.body;

      // 게시글 생성
        const post = await prisma.posts.create({
            data: {
                userId: +userId, 
                title,
                content,
            },
        });

        return res.status(201).json({ message: '게시글이 성공적으로 생성되었습니다.', data: post });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
});

//게시글 목록 조회
router.get('/posts', async (req, res) => {
    try {
        const posts = await prisma.posts.findMany({
            orderBy: {
                createdAt: 'desc', // 최신 게시글 순으로 정렬
            },
        });

        return res.status(200).json({
            message: '게시글 목록 조회에 성공했습니다.',
            data: posts,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: '서버 에러가 발생했습니다.',
        });
    }
});

/** 게시글 상세 조회, 수정, 삭제 API **/

// 게시글 상세 조회
router.get('/posts/:postId', async (req, res) => {
    const { postId } = req.params;
    try {
        const post = await prisma.posts.findUnique({
            where: {
                postId: postId,
            },
        });

        if (!post) {
            return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
        }

        return res.status(200).json({
            message: '게시글 조회에 성공했습니다.',
            data: post,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: '서버 에러가 발생했습니다.',
        });
    }
});

// 게시글 수정
router.patch('/posts/:postId', authMiddleware, async (req, res) => {
    const { postId } = req.params;
    const { title, content } = req.body;

    try {
        const post = await prisma.posts.findUnique({
            where: {
                postId: postId,
            },
        });

        if (!post) {
            return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
        }

        const updatedPost = await prisma.posts.update({
            where: {
                postId: postId,
            },
            data: {
                title: title || post.title,
                content: content || post.content,
            },
        });

        return res.status(200).json({
            message: '게시글 수정에 성공했습니다.',
            data: updatedPost,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: '서버 에러가 발생했습니다.',
        });
    }
});

// 게시글 삭제
router.delete('/posts/:postId', authMiddleware, async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await prisma.posts.findUnique({
            where: {
                postId: postId,
            },
        });

        if (!post) {
            return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
        }

        await prisma.posts.delete({
            where: {
                postId: postId,
            },
        });

        return res.status(200).json({
            message: '게시글 삭제에 성공했습니다.',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: '서버 에러가 발생했습니다.',
        });
    }
});


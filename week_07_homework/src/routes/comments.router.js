//댓글 작성
router.post('/posts/:postId/comments', authMiddleware, async (req, res) => {
});

//댓글 조회
router.get('/posts/:postId/comments', async (req, res) => {
});

//댓글 수정
router.patch('/posts/:postId/comments/:commentId', authMiddleware, async (req, res) => {
});

//댓글 삭제
router.delete('/posts/:postId/comments/:commentId', authMiddleware, async (req, res) => {
});
// 처음에 잘못이해하고 세부로직을 만들었습니다 뒤에는 요청하신 내용으로 작성했습니다!.

// 회원가입
router.post('/auth/signup', authMiddleware, async (req, res) => {
    const { email, password, nickname } = req.body;

    // 이메일 중복 확인
    const isExistUser = await prisma.users.findFirst({
        where: {
            email,
        },
    });

    if (isExistUser) {
        return res.status(409).json({ message: '이미 존재하는 이메일입니다.' });
    }

    try {
        // 사용자 생성
        const user = await prisma.users.create({
            data: {
                email: email,
                password: password, 
                nickname: nickname,
            },
        });

        return res.status(201).json({ message: '회원가입이 완료되었습니다.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
});


// 로그인
router.post('/auth/signin', authMiddleware, async (req, res) => {
    const { email, password } = req.body;

    // 이메일로 사용자 검색
    const user = await prisma.users.findFirst({
        where: {
            email,
        },
    });

    // 사용자가 존재하지 않거나 비밀번호가 일치하지 않으면 오류 반환
    if (!user || user.password !== password) {
        return res.status(401).json({ message: '이메일 또는 비밀번호가 일치하지 않습니다.' });
    }

    // 로그인 성공 시 응답 (토큰 생성 등의 추가 작업 가능)
    return res.status(200).json({ message: '로그인이 성공적으로 완료되었습니다.', user });
});


// 로그아웃
router.post('/auth/logout', authMiddleware, async (req, res) => {
    try {
        // 로그아웃 로직 (예: 세션 무효화, 토큰 삭제 등)
        const user = req.user; // authMiddleware를 통해 가져온 사용자 정보

        if (!user) {
            return res.status(401).json({ message: '로그인이 필요합니다.' });
        }

        // 클라이언트 측에서 사용할 토큰 무효화 예시
        res.clearCookie('token'); // 쿠키에 저장된 JWT 토큰 삭제

        // 추가 작업이 필요한 경우 여기에 작성 (예: 서버 측 세션 관리 시 세션 삭제)

        return res.status(200).json({ message: '성공적으로 로그아웃되었습니다.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: '서버 에러가 발생했습니다.' });
    }
});
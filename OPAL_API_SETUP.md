# Opal API 설정 가이드

## Opal 에이전트 API 연동

Opal 에이전트: https://opal.google/edit/103glL7IJrgZfss4rSdNPYrkOYgyx11Oc

## 1. Opal API 엔드포인트와 키 확인

### Opal 대시보드에서 확인:

1. **Opal 대시보드 접속**:
   - https://opal.google 접속
   - 에이전트 편집 페이지로 이동

2. **API 설정 확인**:
   - 에이전트 설정에서 "API" 또는 "Integration" 섹션 찾기
   - API 엔드포인트 URL 복사
   - API 키 복사

3. **일반적인 Opal API 형식**:
   ```
   엔드포인트: https://api.opal.dev/v1/agents/{agent-id}/run
   또는: https://opal.google/api/v1/agents/{agent-id}/invoke
   ```

## 2. 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```bash
# .env 파일
VITE_OPAL_API_URL=https://api.opal.dev/v1/agents/103glL7IJrgZfss4rSdNPYrkOYgyx11Oc/run
VITE_OPAL_API_KEY=your-opal-api-key-here
VITE_OPAL_AGENT_ID=103glL7IJrgZfss4rSdNPYrkOYgyx11Oc
```

## 3. Opal API 호출 형식

Opal API는 일반적으로 다음과 같은 형식을 사용합니다:

### 요청 형식:
```json
{
  "messages": [
    {
      "role": "user",
      "content": "분석할 텍스트 또는 오디오 URL"
    }
  ],
  "parameters": {
    "sourceLang": "ko",
    "targetLang": "zh"
  }
}
```

### 응답 형식:
Opal 응답을 `SongPayload` 형식으로 변환해야 합니다:
```json
{
  "status": "ok",
  "songId": "...",
  "lines": [
    {
      "lineNo": 1,
      "displayLine": "...",
      "zhSentence": "...",
      "tokensZh": [...],
      "chunks": [...]
    }
  ]
}
```

## 4. 코드 수정 필요 사항

`src/services/opalApi.ts` 파일에서:

1. **엔드포인트 형식 확인**: Opal API의 실제 엔드포인트 형식에 맞게 수정
2. **요청 형식 확인**: Opal API가 요구하는 요청 형식에 맞게 수정
3. **응답 변환**: `transformOpalResponse` 함수를 Opal 응답 형식에 맞게 수정

## 5. 테스트 방법

1. `.env` 파일에 실제 Opal API 정보 입력
2. 개발 서버 재시작: `npm run dev`
3. 웹앱에서 텍스트 입력 또는 오디오 업로드
4. "开始转写 / 分析" 버튼 클릭
5. 브라우저 콘솔에서 API 호출 로그 확인

## 6. 문제 해결

- **401 인증 오류**: API 키 확인
- **404 Not Found**: 엔드포인트 URL 확인
- **응답 형식 오류**: `transformOpalResponse` 함수 수정 필요
- **CORS 오류**: Opal API에서 CORS 설정 확인 필요

## 참고

- Opal 공식 문서: https://opal.google/docs
- Opal API 문서: Opal 대시보드의 API 섹션 참조

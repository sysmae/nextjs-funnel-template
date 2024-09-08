import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { getCurrentUser } from '@/lib/session'
import { Editor } from '@/components/editor'

export default async function CreatePage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <Editor
      post={{
        id: '', // 신규 생성이므로 ID는 아직 없음
        title: 'Untitled', // 기본 제목을 설정 (3자 이상)
        content: {}, // 기본 내용
        published: false, // 기본적으로 게시되지 않은 상태
      }}
    />
  )
}

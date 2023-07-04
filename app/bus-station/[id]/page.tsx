import ContentLayout from '@/components/Layout/ContentLayout'

export default function Page({ params }: { params: { id: string } }) {
  return <ContentLayout backgroundColor="white">{params.id}</ContentLayout>
}

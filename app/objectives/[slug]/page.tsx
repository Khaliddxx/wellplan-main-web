import { objectives } from '@/lib/data'
import { DetailPageContent } from './content'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return objectives.map((objective) => ({
    slug: objective.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const objective = objectives.find((obj) => obj.slug === params.slug)
  
  if (!objective) {
    return {
      title: 'Not Found',
    }
  }

  return {
    title: `${objective.title} - WellPlan`,
    description: objective.description,
  }
}

const DetailPage = ({ params }: PageProps) => {
  const objective = objectives.find((obj) => obj.slug === params.slug)

  if (!objective) {
    notFound()
  }

  return <DetailPageContent objective={objective} />
}

export default DetailPage

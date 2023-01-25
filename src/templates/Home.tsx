import { UserCard } from '../components/UserCard'
import { UserCardContainer } from '../styles/template-styles'

export function Home() {
  return (
    <>
      <UserCardContainer>
        <h1>Quem esta assistindo?</h1>
        <div>
          <UserCard name="Nathan" />
        </div>
      </UserCardContainer>
    </>
  )
}

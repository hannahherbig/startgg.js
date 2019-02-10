import * as Schema from './schema'
export const phaseGroup = `query PhaseGroupQuery($id: Int){
	phaseGroup(id: $id){
		${Schema.phaseGroup}
	}
}`

export const phaseGroupSeeds = `query PhaseGroupSeedsQuery($id: Int, $page: Int, $perPage: Int, $orderBy: String){
	phaseGroup(id: $id){
		paginatedSeeds(query: {
			page: $page, $perPage: perPage, orderBy: $orderBy
		}){
			nodes{
				${Schema.seeds}
			}
		}
	}
}`

export const phaseGroupSeedStandings = `query PhaseGroupSeedsQuery($id: Int, $page: Int, $perPage: Int, $orderBy: String){
	phaseGroup(id: $id){
		paginatedSeeds(query: {
			page: $page, $perPage: perPage, orderBy: $orderBy
		}){
			nodes{
				standings{
					${Schema.standings}
				}
			}
		}
	}
}`

export const phaseGroupSets = `query PhaseGroupEntrants($id: Int, $page: Int, $perPage: Int, $sortType: SetSortType, $filters: SetFilters){
	phaseGroup(id: $id){
	  paginatedSets(page:$page, perPage:$perPage, sortType:$sortType, filters:$filters){
		pageInfo{
		  totalPages
		}
		nodes{
			${Schema.set}
		}
	  }
	}
  }`

export const phaseGroupEntrants = `query PhaseGroupEntrants($id: Int, $page: Int, $perPage: Int, $sortBy: String, $filter: SeedPageFilter){
	phaseGroup(id: $id){
		paginatedSeeds(query: {
			page: $page,
			perPage: $perPage,
			sortBy: $sortBy,
			filter: $filter
		}){
			{pageInfo}
			nodes{
				entrant{
					${Schema.entrant}
				}
			}
		}
	}	
}`

export const phaseGroupAttendees = `query PhaseGroupEntrants($id: Int, $page: Int, $perPage: Int, $sortBy: String, $filter: SeedPageFilter){
	phaseGroup(id: $id){
		paginatedSeeds(query: {
			page: $page,
			perPage: $perPage,
			sortBy: $sortBy,
			filter: $filter
		}){
			{pageInfo}
			nodes{
				entrant{
					participants{
						${Schema.attendee}
					}
				}
			}
		}
	}	
}`
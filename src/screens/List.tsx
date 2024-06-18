import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { ListReleaseCard } from "../components";

import { fetchPendingReleases } from "../api";
import { IRelease } from "../types";

const List = () => {
  const [pendingList, setPendingList] = useState<IRelease[]>();
  const {
    data: pendingReleasesData,
    isLoading: pendingReleasesIsLoading,
    error: pendingReleasesError,
  } = useQuery({
    queryKey: ["pendingReleases"],
    queryFn: fetchPendingReleases,
  });

  useEffect(() => {
    pendingReleasesData && setPendingList(pendingReleasesData);
  }, [pendingReleasesData]);

  if (pendingReleasesIsLoading) {
    return <div>Loading...</div>;
  }

  if (pendingReleasesError || !pendingList) {
    return <div>Error!</div>;
  }

  return (
    <ListWrapper>
      <PendingListWrapper>
        {pendingList.map((release) => (
          <React.Fragment key={release._id}>
            <ListReleaseCard release={release} />
          </React.Fragment>
        ))}
      </PendingListWrapper>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 496px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.margin.default};
`;

const PendingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default List;

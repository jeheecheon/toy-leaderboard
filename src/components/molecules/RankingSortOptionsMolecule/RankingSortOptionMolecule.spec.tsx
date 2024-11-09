import { render, screen, fireEvent } from "@testing-library/react";
import RankingSortOptionMolecule from "@/components/molecules/RankingSortOptionsMolecule";
import { QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import { queryClient } from "@/utils/tanstack";

describe("RankingSortOptionMolecule - 텍스트 클릭 시 하이라이트 테스트", () => {
  // RankingSortOptionMolecule 컴포넌트 렌더링 로직 분리
  const setup = () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <RankingSortOptionMolecule />
        </MemoryRouter>
      </QueryClientProvider>
    );
  };

  test.each([
    {
      description: "'score' 항목을 클릭하면 텍스트가 하이라이트되어야 한다",
      dataid: "score-list-item",
    },
    {
      description: "'wins' 항목을 클릭하면 텍스트가 하이라이트되어야 한다",
      dataid: "wins-list-item",
    },
    {
      description: "'losses' 항목을 클릭하면 텍스트가 하이라이트되어야 한다",
      dataid: "losses-list-item",
    },
    {
      description: "'win rate' 항목을 클릭하면 텍스트가 하이라이트되어야 한다",
      dataid: "winRate-list-item",
    },
  ])("$description", async ({ dataid }) => {
    // GIVEN: RankingSortOptionMolecule 컴포넌트가 렌더링된다.
    setup();

    // WHEN: 사용자가 해당 항목을 클릭한다
    const sortByParagraph = screen.getByTestId(dataid).querySelector("p");
    expect(sortByParagraph).toBeTruthy(); // 요소가 존재하는지 확인
    fireEvent.click(sortByParagraph!);

    // THEN: 텍스트에 "highlight" 클래스가 추가되어야 한다
    expect(sortByParagraph).toHaveClass("text-highlight");
  });
});

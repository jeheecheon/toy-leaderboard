import { render, screen, fireEvent } from "@testing-library/react";
import ToggleSwitchAtom from "@/components/atoms/ToggleSwitchAtom";

describe("ToggleSwitchAtom - 토글 스위치 컴포넌트 테스트", () => {
  test("초기 상태가 켜져 있을 때 올바른 클래스가 적용되어야 한다", () => {
    // GIVEN: 초기 상태가 켜져 있는 컴포넌트를 렌더링
    render(<ToggleSwitchAtom isOn={true} onClick={() => {}} />);

    // THEN: 토글 버튼에 켜진 상태의 클래스가 적용되었는지 확인
    const toggleElement = screen.getByRole("button").firstChild;
    expect(toggleElement).toHaveClass("transform translate-x-full");
  });

  test("초기 상태가 꺼져 있을 때 올바른 클래스가 적용되어야 한다", () => {
    // GIVEN: 초기 상태가 꺼져 있는 컴포넌트를 렌더링
    render(<ToggleSwitchAtom isOn={false} onClick={() => {}} />);

    // THEN: 토글 버튼에 꺼진 상태의 클래스가 적용되었는지 확인
    const toggleElement = screen.getByRole("button").firstChild;
    expect(toggleElement).not.toHaveClass("transform translate-x-full");
  });

  test("버튼을 클릭하면 onClick 콜백이 호출되어야 한다", () => {
    // GIVEN: onClick 콜백 함수를 모킹하고, 초기 상태가 꺼져 있는 컴포넌트를 렌더링
    const onClickMock = jest.fn();
    render(<ToggleSwitchAtom isOn={false} onClick={onClickMock} />);

    // WHEN: 버튼을 클릭
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);

    // THEN: onClick 콜백이 한 번 호출되었는지 확인
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

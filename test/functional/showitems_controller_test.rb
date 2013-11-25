require 'test_helper'

class ShowitemsControllerTest < ActionController::TestCase
  setup do
    @showitem = showitems(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:showitems)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create showitem" do
    assert_difference('Showitem.count') do
      post :create, showitem: { description: @showitem.description, featured: @showitem.featured, image: @showitem.image, name: @showitem.name }
    end

    assert_redirected_to showitem_path(assigns(:showitem))
  end

  test "should show showitem" do
    get :show, id: @showitem
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @showitem
    assert_response :success
  end

  test "should update showitem" do
    put :update, id: @showitem, showitem: { description: @showitem.description, featured: @showitem.featured, image: @showitem.image, name: @showitem.name }
    assert_redirected_to showitem_path(assigns(:showitem))
  end

  test "should destroy showitem" do
    assert_difference('Showitem.count', -1) do
      delete :destroy, id: @showitem
    end

    assert_redirected_to showitems_path
  end
end

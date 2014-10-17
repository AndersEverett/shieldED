class UsersController < ApplicationController
  def index
    @users = User.all
    @user = User.new
  end

  def process_login

  #   @user = User.find_by(username: params[:username])
  #   if @user == nil
  #     session[:error] = "Invalid Username"
  #     redirect_to login_path(@user)
  #   elsif @user.password_hash != params[:password_hash]
  #     session[:error] = "Invalid Password"
  #     redirect_to login_path(@user)
  #   else
  #     session[:current_user_id] = @user.id
  #     session[:error] = nil
  #     redirect_to root_path(@user)
  #   end
  end

  def logout
    session[:current_user_id] = nil
    redirect_to root_path
  end

  # def show
  #   @user = User.find params[:id]
  # end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:current_user_id] = @user.id
      redirect_to user_path(@user)
    else
      render :new
    end
  end

  # def edit
  #   @user = User.find params[:id]
  # end

  # def update
  #   @user = User.find params[:id]
  #   if @user.update_attributes(user_params)
  #     redirect_to user_path(@user)
  #   else
  #     render :edit
  #   end
  # end

  # def destroy
  #   @user_to_destroy = User.find params[:id]
  #   @user_to_destroy.destroy
  #   redirect_to root_path
  # end


  private

  def user_params
    params.require(:user).permit(:username, :password_hash, :level)
  end

end

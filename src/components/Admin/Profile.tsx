import React from 'react';

export const Profile = () => {
	return (
		<div>
			<div className="container mt-5 mb-5 d-flex justify-content-center">
				<div className="card rounded">
					<div className=" d-block justify-content-center">
						<div className="area1 p-3 py-5"> </div>
						<div className="area2 p- text-center px-3">
							<div className="image mr-3">
								{' '}
								<img
									src="https://i.imgur.com/ZSkeqnd.jpg"
									className="rounded-circle"
									width="100"
									alt="img"
								/>
								<h4 className=" name mt-3 ">Anna Watson</h4>
								<p className="information mt-3 text-justify">
									I'm doing this as a way to practice my design skills,explore
									different styles and have fun.I'm fully aware this challenge
									doesn't pose my real problem to solve,That's why i'm looking
									for criticism and feedback ,not just likes{' '}
								</p>
								<div className="d-flex justify-content-center mt-5">
									<ul className="list">
										<li>
											<a>Edit Profile</a>
										</li>
									</ul>
								</div>
							</div>
							<div> </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
